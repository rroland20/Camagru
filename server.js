import http from "http";

import urls from "./server/urls.js";
import {getRequestUrl} from "./server/utils/index.js";
import {sendStaticFiles} from "./server/sendStaticFiles.js";


http.createServer(function (request, response) {
    const requestUrl = getRequestUrl(request.url);

    const viewsList = urls.map(({ views }) => views).flat();
    const viewToRender = viewsList.find(({ url }) => `/${url}` === requestUrl);

    if (viewToRender) {
        viewToRender.view(request, response);

        return;
    }

    sendStaticFiles(request, response);
    
}).listen(8125);
console.log('Server running at http://127.0.0.1:8125/');