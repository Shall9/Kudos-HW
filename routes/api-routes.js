const Users = require('../models/Users');
const Kudos = require('../models/Kudos');

module.exports = function (app) {

    app.get('/users', function (req, res) {
        Users.find({})
            .populate('kudos')
            .then(function (users) {
                res.json(users)
            }).catch(function (err) {
                res.json(err);
            });
    })
    app.get('/kudos', function (req, res) {
        Kudos.find({}).then(function (kudos) {
            res.json(kudos);
        }).catch(function (err) {
            res.json(err);
        });
    })
    app.post('/api/users', function (req, res) {
        console.log(req.body)
        Users.create(req.body)
            .then(function (newUser) {
                res.json(newUser)
            }).catch(function (err) {
                res.json(err);
            });
}