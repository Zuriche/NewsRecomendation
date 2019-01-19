var jayson = require('jayson');

// create a client
var client = jayson.client.http({
  port: 4040,
  hostname: 'localhost'
});

// invoke "add"
function add(a, b, callback) {
    client.request('add', [a, b], function(err, response) {
        if(err) throw err;
        console.log(response.result);
        callback(response.result);

    });

}

function getNewsSummariesForUser(user_id, page_num, callback) {
    client.request('getNewsSummariesForUser', [user_id, page_num], function(err, response) {
        console.log(user_id);
        console.log(page_num);        
        if(err) throw err;
        console.log(response);
        callback(response.result);
    });
}

module.exports = {
    add: add,
    getNewsSummariesForUser: getNewsSummariesForUser
};
