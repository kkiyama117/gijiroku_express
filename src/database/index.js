require('reflect-metadata');
const typeorm = require('typeorm');
const User = require('../entity/User');

function createUser(first, last) {
  typeorm
    .createConnection()
    .then(function(connection) {
      console.log('Inserting a new user into the database...');
      const user = new User();
      user.firstName = first;
      user.lastName = last;
      // Save
      connection.manager.save(user).then(function(savedUser) {
        console.log('Saved a new user with id: ' + savedUser.id);
        console.log('Loading users from the database...');
      });
      return user;
    })
    .catch(function(error) {
      console.log('Error: ', error);
    });
}

module.exports = {
  createUser: createUser,
};
