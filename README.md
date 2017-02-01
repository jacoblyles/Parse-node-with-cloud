[![npm version](https://badge.fury.io/js/parse-node-with-cloud.svg)](https://badge.fury.io/js/parse-node-with-cloud)

This library is for running Parse cloud code in node.js. It provides a `Parse` object with `Parse.Cloud` defined. This is very useful for unit testing your cloud code! 

Usage:

```
const Parse = require('parse-node-with-cloud').Parse;
```

Or if Parse is already defined:

```
const addParseCloud = require('parse-node-with-cloud').addParseCloud;
addParseCloud();
```

And then you are free to use all the `Parse.Cloud` functions:

```
Parse.Cloud.beforeSave("MyData", function(request,response) { .... });
```

& etc. 
