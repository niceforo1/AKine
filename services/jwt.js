const jwt = require('jwt-simple');
const moment = require('moment');
const secret = 't0d05M3Chup4n3lPing0';

exports.createToken = function(user) {
  const payload = {
    name: user.user,
    // password: user.password,
    role: user.role,
    iar: moment().unix(),
    exp: moment()
      .add(30, 'days')
      .unix()
  };
  return jwt.encode(payload, secret);
};
