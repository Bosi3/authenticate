//which will handle all functionality related to our users.
const users = require('./users');

module.exports = (router) => {
  users(router);
  return router;
};