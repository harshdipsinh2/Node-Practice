const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.write("Welcome to the Home Page likr !");
        res.end();
    }
    if(req.url === '/source-code') {
        res.write("Welcome to the Home Page! ehfowhwibyfgei hoeghoerihgoe r hrgoeihoreihg ergiehgoihreo fvoewirhgoeri ferohygi hgerh rhg ");
        res.end();
    }
});

//web server 

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});