/**
 * 
 */


var dbFactory = require('./DatabaseFactory');

var dbType = require("./DbType");

var db = dbFactory.getDB(dbType.Mongo);

var connected = false;

var connectedCb;
var connectError;

//this will be fired once when the application is started...
//once we return from here properly we then start accepting client request

function makeConnection(cb,cberr) {
  
  connectedCb = cb;
  connectError = cberr;
  
  db.connect(connectionEstablished,connectionError);

}
module.exports.makeConnection = makeConnection;



function connectionEstablished() {
  connected = true;
  if(connectedCb) {
    connectedCb();
  }
}

function connectionError() {
  console.log("Connection error with db");
  if(connectError) {
    connectError();
  }
}


function insertData(cb) {
  
}

function sleectData(cb) {
  
}

function deleteData(cb) {
  
}

