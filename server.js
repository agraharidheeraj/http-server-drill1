const http= require('http');
const url = require('url');
 
const htmlRoute=  require('./routes/html.js')
const jsonRoute = require('./routes/json.js')
const uuidRoute = require('./routes/uuid.js')
const statusRoute= require('./routes/status.js')
const delayRoute = require('./routes/delay.js')
const port = 8080;

const server= http.createServer((req, res) =>{
   const newurl = url.parse(req.url,true);
   if(newurl.pathname === '/html'){
     htmlRoute(req,res);
   }
   else if(newurl.pathname ==='/json'){
    jsonRoute(req,res);
   }
   else if(newurl.pathname ==='/uuid'){
        uuidRoute(req,res);
   }
   else if (newurl.pathname.startsWith('/status/')) {
    const statusCode = parseInt(newurl.pathname.split('/status/')[1]);
    statusRoute(req, res, statusCode);
   }
   else if (newurl.pathname.startsWith('/delay/')) {
    const delayInSeconds = parseInt(newurl.pathname.split('/delay/')[1]);
    delayRoute(req, res, delayInSeconds);
   }
   else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
}
)
server.listen(port, ()=>{
    console.log(`server listening on port ${port}`);
})

