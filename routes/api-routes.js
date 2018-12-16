const User = require("../models/User");
const Kudo = require("../models/Kudo");


module.exports = function (app) {
    app.get("/user", function (req, res) {
        User.find({})
            .populate("kudo")
            .then(function (users) {
                res.json(users);
            })
            .catch(function (err) {
                res.json(err);
            });
    });

    app.get("/kudo", function (req, res) {
        Kudo.find({})
            .then(function (kudo) {
                res.json(kudo);
            })
            .catch(function (err) {
                res.json(err);
            });
    });

    // post route to be used for api routing for posting new kudos to the database
    app.post("/api/kudo", function (req, res) {
        //creating our newKudo object to hold the data as received by the request from the api
        const newKudo = {
            title: req.body.title,
            to: req.body.to,
            from: req.body.from,
            body: req.body.body
        };
        console.log(newKudo);

        //calling the Kudos.create method of the Kudo model, passing in thew newKudo object fulfilled by the req.body values
        Kudo.create(newKudo)
            //.then fires once the asynchronous function (kudos.create) is completed which once its completed, we want the .then to send back our response (the newly added Kudo) in JSON format to the developer.
            .then(function (newKudo) {
                res.json(newKudo);
            })
            //.catch is used for "catching errors", and if there is an error it will JSON the error message and send it back to the developer
            .catch(function (err) {
                res.json(err);
            });
    });
};