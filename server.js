import http from "http";
import fs from "fs";
import path from "path";

import urls from "./server/urls.js";
import {getRequestUrl} from "./server/utils/index.js";

const urlsTemplate = [
    {
        url: '/',
        template: './index.html',
    },
    {
        url: '/signup/',
        template: './signup/index.html',
    },
    {
        url: '/signin/',
        template: './signin/index.html',
    },
    {
        url: '/add/',
        template: './signup/index.html',
    }
];

function sendStaticFiles(request, response) {
    var filePath = '.' + request.url;
    
    const page = urlsTemplate.find((urlObject) => {
        return urlObject.url === request.url;
    });

    if (page) {
        filePath = page.template;
    }

    var extname = String(path.extname(filePath)).toLowerCase();
    var mimeTypes = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpg',
        '.gif': 'image/gif',
        '.svg': 'image/svg+xml',
        '.wav': 'audio/wav',
        '.mp4': 'video/mp4',
        '.woff': 'application/font-woff',
        '.ttf': 'application/font-ttf',
        '.eot': 'application/vnd.ms-fontobject',
        '.otf': 'application/font-otf',
        '.wasm': 'application/wasm'
    };

    var contentType = mimeTypes[extname] || 'application/octet-stream';

    fs.readFile(filePath, function(error, content) {
        if (error) {
            if(error.code === 'ENOENT') {
                fs.readFile('./404.html', function(error, content) {
                    response.writeHead(404, { 'Content-Type': 'text/html' });
                    response.end(content, 'utf-8');
                });
            }
            else {
                response.writeHead(500);
                response.end('Sorry, check with the site admin for error: '+error.code+' ..\n');
            }
        }
        else {
            response.writeHead(200, { 'Content-Type': contentType });
            response.end(content, 'utf-8');
        }
    });
}

function sendUserPost(response) {
    if (request.url === '/user-posts/') {
        fs.readFile('./db.json', function(error, content) {
            if (error) {
                if (error.code === 'ENOENT') {
                    fs.readFile('./404.html', function(error, content) {
                        response.writeHead(404, { 'Content-Type': 'text/html' });
                        response.end(content, 'utf-8');
                    });
                }
                else {
                    response.writeHead(500);
                    response.end('Sorry, check with the site admin for error: '+error.code+' ..\n');
                }
            }
            else {
                response.writeHead(200, { 'Content-Type': 'application/json' });
                response.end(content, 'utf-8');
            }
        });

        return;
    }
}

function signUp(response) {
    const responseData = {
        status: "success",
    };

    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify(responseData), 'utf-8');
}

http.createServer(function (request, response) {
    const requestUrl = getRequestUrl(request.url);
    console.log('requestUrl', requestUrl)

    const viewsList = urls.map(({ views }) => views).flat();
    const viewToRender = viewsList.find(({ url }) => `/${url}` === requestUrl);

    if (viewToRender) {
        viewToRender.view(request, response);

        return;
    }

    switch (requestUrl) {
        case '/user-post/':
            sendUserPost(response);
            break;

        case '/api/signup/':
            signUp(response);
            break;

        default: sendStaticFiles(request, response);
    }
    
}).listen(8125);
console.log('Server running at http://127.0.0.1:8125/');