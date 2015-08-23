/**
 * 
 */

var conf = require('../../conf/Configuration');

var dtype = require("../DbType");

var mongoose = require('mongoose');

var dbUri = conf.getDBUri();


var mongoUri = "mongodb://"+dbUri;

var dbPortNum = conf.getDBPort();

//now lets do some more clever stuff here..

var dbName = conf.projectName();

var db = mongoose.connection;

var dbtype = dtype.Mongo;

function ConnectMongo(cb,cberror) {

  mongoose.connect(mongoUri+":"+dbPortNum+"/"+dbName);
  //its an error
  
  //just a default error logging here..
  if(!cberror) {
    cberror = function() {console.error.bind(console, 'connection error:');};
  }
  db.on('error',     
      cberror
 );
  
  
  db.once('open', cb);

}

module.exports.connect = ConnectMongo;

module.exports.type = function (){return dbtype;};




