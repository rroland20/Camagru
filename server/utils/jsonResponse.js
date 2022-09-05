function jsonResponse(response, jsonData) {
  response.writeHead(200, { 'Content-Type': 'application/json' });
  response.end(jsonData, 'utf-8');
}

export { jsonResponse };