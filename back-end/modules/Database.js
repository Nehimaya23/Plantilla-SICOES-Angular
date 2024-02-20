const mariadb = require('mariadb');
var connection  = mariadb.createPool({
     host: 'localhost', 
     user:'root',
     port:3307,
     database:'self-management', 
     password: 'mans20'
});
module.exports = Object.freeze({
    pool: connection
});