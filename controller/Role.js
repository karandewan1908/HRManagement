/**
 * Controller for roles..
 */


var dbQuerymanager = require('../database/DatabaseQueryManager');
var tables = require('../database/DBTable');
var role = require('../datastructure/Role');


function populate(roleid,cb) {
  
  var receiveCB = makeRoleDataReceiveCB(roleid,cb);
  
  //we need database query manager now to get data for user from database..
  
  var query = {};
  
  query.tbName = tables.Role;
  
  query.obj = {};
  
  if(!roleid) {
    receiveCB(new Error("Invalid role id"));
    return;
  }
  
  query.obj._id = roleid;
    
  dbQuerymanager.selectUniqueTuple(query,receiveCB);
  
  
}
module.exports.populate = populate;


function makeRoleDataReceiveCB(userid,cb) {
  
  function gotRoleData(err,data) {
  
    var r = null;
    if(data) {
      //we got valid data lets now just make the user object
      r = new role(data);
      
    }
    
    if(cb) {
      cb(err,r);
    }
    
    
  }
  return gotRoleData;
  
}