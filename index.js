Parse = require('parse/node').Parse;

function addParseCloud() {
  const ParseCloud = require("./parse-server/lib/cloud-code/Parse.Cloud");
  Object.assign(Parse.Cloud, ParseCloud);
  global.Parse = Parse;
}
addParseCloud();

module.exports.Parse = Parse;
module.exports.addParseCloud = addParseCloud;
