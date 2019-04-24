

var path = require('path');

module.exports = function(app){
//HTML GET Requests
    app.get("/survey", function (req, res){
        res.sendFile(path.join(__dirname, "../public/survey.html"))
    });

    //Default route
    app.get("*", function(req, res){
        res.sendFile(path.join(__dirname, "../api/friends.js"));
    })
}

