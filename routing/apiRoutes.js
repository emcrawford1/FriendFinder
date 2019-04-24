var friendData = require('../app/data/friends');



module.exports = function (app) {

    // app.get("/api/match", function (req, res) {
    //     res.json(friendData);
    // });


    app.post("/api/match", function (req, res) {
        res.json(match(req.body, friendData));
        console.log(req.body);
    })
}

function match(userAnswers, potentialMatches) {

    var match = 0;
    var lowestDifference = scoreCalculation(userAnswers, potentialMatches[0].scores);

    for (var i = 1; i < potentialMatches.length; i++) {

        var scoreTotal = scoreCalculation(userAnswers, potentialMatches[i].scores);
        if(scoreTotal < lowestDifference){
            match = i;
            lowestDifference = scoreTotal;
        }

    }

    return potentialMatches[match];

}

function scoreCalculation(user, possibleMatch) {
    var total = 0;
    for (var i = 0; i < user.theAnswers.length; i++) {

        total += Math.abs(user.theAnswers[i] - possibleMatch[i]);
    }
    return total;
}