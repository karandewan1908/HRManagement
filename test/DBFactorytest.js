/**
 * 
 */

var dbFactory = require("../database/DatabaseFactory");

var dbType = require('../database/DbType');


var mongodb = dbFactory.getDB(dbType.Mongo);

var type = dbType.Mongo;

var dbType = mongodb.type();

if(type != dbType) {
  console.log("Db Type didn't match");
}else{
  console.log("Type matched");
}
