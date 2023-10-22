module.exports = function(req,res,statusCode){
    res.writeHead(statusCode,{'Content-Type':'text/plain'});
    res.end(`Response with status code: ${statusCode}`);
}