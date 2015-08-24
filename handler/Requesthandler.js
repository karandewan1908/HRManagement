/**
 * 
 */


var router = require('./Route');

var conf = require('../conf/Configuration');

var auth = require('../auth/Authentication');


function handleRequest(obj) {
  
  
  var url = obj.request.url
  
  var ubits = url.split("/");
  
  var cbParam = {};
  
  cbParam.ubits = ubits;
  
  cbParam.url = url;
  
  cbParam.response = obj.response;
  
  cbParam.request = obj.request;
  
  auth.authenticate(ubits[1],makeAuthCB(cbParam));
  
}
module.exports.handleRequest = handleRequest;

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
    
   //now we got everything to perform actions..
    
   //lets do them now...
    
    param.user = user;
    
    processRequest(param);
    
  }
  
  return callBack;
  
}

function processRequest(obj) {
  
  var user = obj.user;
  
  var requesturl = obj.url;
  
  var reqObj = router.convertRequestUrlToObject(requesturl);
  
  if(router.checkRequestValid(reqObj)) {
    
    //now we just need to perform the action and we are done!!
    
    //we will make use of roles attach to the user to make sure if we can perform actions or not..
  
    
    
    
    
    
    
  }else{
    console.error("ERR - Invalid request");
    var response = obj.response;
    response.end("ERR - Invalid request!! Cannot proceeed");
    return;
  }
  
}
module.exports.processRequest = processRequest;
