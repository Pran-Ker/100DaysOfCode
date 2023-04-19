const http = require('http');
const fs = require('fs');
const express = require('express');
const app = express();

const server = http.createServer((res, req) => {
    console.log(req.url, req.method);

    res.setHeader('Content-Type', 'text/html');

    let path = './views/';
    
    switch(req.url) {
        case '/':
            path += 'index.html';
            break;

        case '/about':
            path += 'about.html';
            break;
        
        default:
            path += '404.html';
            break;
    }
    
    fs.readFile(path, (err, data) => {
        if(err){
            console.log(err);
            res.end();
        } else {
            res.end(data);
        }
    });




});

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})