const { v4: uuidv4 } = require('uuid');

module.exports = function (req, res) {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  const generatedUUID = uuidv4();
  res.end(JSON.stringify({ uuid: generatedUUID }));
};
