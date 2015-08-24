/**
 * This will return the right type of db we need..
 * 
 */

var dbType = require('./DbType');

function getDB(dbtype) {
  var ret = null;
  
  switch(dbtype) {
      
    case dbType.Mongo: 
      ret = require('./mongodb/MongoDB');
      break;
    }
    
    return ret;
    
}
module.exports.getDB = getDB;


