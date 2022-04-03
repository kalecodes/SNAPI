const { User, Thought } = require('../models');

const userController = {
    // get all users
    getUsers(req, res) {
        User.find()
            .select('-__v')
            .then((dbUserData) => {
                res.json(dbUserData);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },

    // get a single user by _id
    getSingleUser(req, res) {
        User.findOne({ _id: req.params.userId })
            .select('-__v')
            .populate('friends')
            .populate('thoughts')
            .then((dbUserData) => {
                if (!dbUserData) {
                    return res.status(404).json({ message: 'No user with this id!' });
                }
                res.json(dbUserData);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err)
            });
    },

    // create a user 
    createUser(req, res) {
        User.create(req.body)
            .then((dbUserData) => {
                res.json(dbUserData);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },

    // update a user by id
    updateUser(req,res) {

    },

    // delete a user by id
    deleteUser(req, res) {

    },

    // add a friend to a users friend list
    addFriend(req, res) {

    },

    // remove a friend from a user's friend list
    removeFriend(req, res) {

    }
}

module.exports = userController;
