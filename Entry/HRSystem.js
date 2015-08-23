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
  
  if(ubits.length < 1) {
    response.end("Invalid request!!");
    return;
  }
  
  var cbParam = {};
  
  cbParam.ubits = ubits;
  
  cbParam.response = response;
  
  cbParam.request = request;
  
  auth.authenticate(ubits[1],makeAuthCB(cbParam));
  
}


function makeAuthCB(param) {
  
  function callBack(err, user) {
   
    var response = param.response; 
    if(err) {
      console.log(err);
      response.end(err.message);
      return;
    }
    
    if(!user) {
      response.end("ERR - Invalid user");
      return;
    }
    
    response.end("Valid user!!");
    
    
    
  }
  
  return callBack;
  
}

function listener() {
 console.log("HR management service started at port "+listenPort); 
}






