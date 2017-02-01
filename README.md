This library is for running Parse code in node.js. Very useful for testing! 

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
