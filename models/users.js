'use strict'

const { bookshelf } = require('../db/database');
const { compare } = require('bcryptjs')

const User = bookshelf.Model.extend({
  tableName: 'users',
  bcrypt: {field: 'password'},
  comparePass: function(passwordStr){
    return compare(passwordStr, this.attributes.password)
  }
}, {
    findOneByEmail: function(email){
      return this.forge ({email})
      .fetch()
      .then( (user) => {
        console.log("findOneByEmail user model", user.get('email'));
        return user;
      })
      .catch( () => {
        console.log('findOneByEmail catch user model');
        return null

      })
    }
})
module.exports = User;
      // getAllUsers: function(){
      //   return this.forge().fetchAll()
      //   .then(users => users)
      //   .catch(() => null)
      // },
      // getAllLikedUsers: function(){
      //   return this.forge().query({where: {username: ''}}).fetchAll()
      //   .then(users => users.toJSON())
      //   .catch(() => null)
      // },
