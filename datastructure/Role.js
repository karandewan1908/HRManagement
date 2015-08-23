/**
 * 
 */


function Role(data) {
  
  var me = this;
  
  function getProperty(prop) {
    
    var ret = null;
    
    
    if(prop in data) {
      ret = data[prop];
    }
    
    return ret;
    
  }
  me.getProperty =getProperty;
  
  function  isFullAccessAllowed() {
    var ret = false;
    if(data.allcapability) {
      ret = true;
    }
    return ret;
  }
  me.isFullAccessAllowed = isFullAccessAllowed;
  
  //by deafult we deny and see if restriction field exists and doesn't have permission..
  function canAccess(perm) {
    
    var ret = false;
    
    var restrictions = data["restriction"];
    
    
    
    if(restrictions) {
      
      if(perm in restrictions) {
        ret = false;
      }else{
        ret = true;
      }
      
    }
    
    
    return ret;
    
  }
  
  
}
module.exports = Role;