/**
 * This is the user who is trying to update other users in the system..
 * This user is currently being created by authentication module..
 */


function WokringUser(data) {
  
  
  var me = this;
  
  var role;
  
  var validUser = false;
  
  if(data) {
   validUser = true; 
  }
  
  function getProperty(prop) {
    
    var ret = null;
    
    if(prop in data) {
      ret = data[prop];
    }
    
    return ret;
  }
  me.getProperty = getProperty;
  
  
  function hasPermission(perm) {
    var ret = false;
    
    return ret;
    
  }
  me.hasPermission = hasPermission;
  
  function isValidUser() {
    return validUser;
  }
  me.isValidUser = isValidUser;
  
  
  function attachRole(r) {
    role = r;
  }
  me.attachRole = attachRole;
  
  
  
  
  
}

module.exports = WokringUser;