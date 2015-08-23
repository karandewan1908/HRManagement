/**
 * For a time being we will keep all configuration here.. 
 * But for future it would be neater to have conf file and a parser for it..
 */


var port = 10987;

module.exports.getHttpPort = function() {
  return port;
}

module.exports.getDBUri = function() {
  return "localhost";
}

module.exports.getDBPort = function() {
  return "27017";
}

module.exports.projectName = function() {
  return "HRManagement";
}



