async function getAmount(userId, locationId, netStart, netEnd) {

const https = require(https);
var url = `
    https://jsonmock.hackerrank.com/api/transactions/search?userId=${userId}`;


https.get(url, (res) => {
    var body = '';

    res.on('data', function (chunk) {
        body += chunk;
    });

    res.on('end', function () {
        var fbResponse = JSON.parse(body);
        console.log("Got a response: ", fbResponse.picture);
    });
}).on('error', function (e) {
    console.log("Got an error: ", e);
});


}