let Swagger = require('swagger-client');

exports.handler = function (event, context, callback) {

    Swagger.http({
        url: `https://services.apixplatform.com/api-sandbox/application/token`,
        method: 'post',
        query: {},
        headers: { "Accept": "*/*", "Content-Type": "application/json" },
        body: {
            "id": 123
        }
    }).then((response) => {
        console.log("Received response", response);
        callback(null, response);
    }).catch((err) => {
        console.log("Error occurred", err);
        callback(err);
    });

    
}