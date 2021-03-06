const jwt = require('jsonwebtoken');
const config = require('config');

function sendToken (req) {
  // Validade do Token: 7 dias 
  const token = jwt.sign({ username: req.body.username }, config.get('jwtPrivateKey'), { expiresIn: 604800 }); // 7 dias em segundos
  return token;
}

module.exports = sendToken;
