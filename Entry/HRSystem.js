/**
 * This is the main entry of the app..
 * URL to our system look like this
 *    /userid/type/action/id id here is optional.. in case of addition we dont need it
 *  
 *    userid is the id the user trying to access the system.. 
 *    this is basically api key for the user that distinguish the user...
 *  
 */

var http = require('http');

var conf = require('../conf/Configuration');

var auth = require('../auth/Authentication');

var listenPort = conf.getHttpPort();

var dbQueryManager = require('../database/DatabaseQueryManager');

dbQueryManager.makeConnection(dbConnected,dbConnectError);

var server= null;

function dbConnected() {
  server = http.createServer(handleRequest);

  server.listen(listenPort,listener);
}

function dbConnectError() {
  console.error("Db Connection couldn't be established. System going down");
  process.exit(1);
}

function handleRequest(request,response) {
  
  var url = request.url;
  
  var ubits = url.split("/");
  
  if(ubits.length < 3) {
    response.end("Invalid request!!");
  }
  
  auth.authenticate(ubits[0],makeAuthCB(ubits));
  
}


function makeAuthCB(ubits) {
  
  function callBack() {
    
  }
  
  return callBack;
  
}

function listener() {
 console.log("HR management service started at port "+listenPort); 
}






