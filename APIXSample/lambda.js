exports.handler = function(event, context, callback) {
    
    console.log("Hello World");
    callback(null, {"message": "Hello World"});
}