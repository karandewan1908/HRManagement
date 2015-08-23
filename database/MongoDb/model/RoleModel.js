/**
 * 
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RoleSchema = new Schema({
  
  _id:String,  
  //this is the unique id for the role schema.. tyoe is string just to keep it simple
  
  
  title:String,  
  //title or name for the role
  
  
  allcapability:Boolean,    
  //if true then no restriction for this role otherwise role has restricted access 
  
  restriction:Schema.Types.Mixed   
  //define what all this role cannot access.. String should begin with entity name followed by underscor
  //for example to restric employee salary add employee_salary
}  ,{collection: 'Role'} );

module.exports = mongoose.model('roles',RoleSchema);