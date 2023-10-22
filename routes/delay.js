module.exports = function (req, res, delayInMilliSeconds) {
    
    //using setTimeout for delay the responce
    setTimeout(() => {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(`Response delay in ${delayInMilliSeconds} second with Status : ${200}`);
    }, delayInMilliSeconds * 1000);
  };
  