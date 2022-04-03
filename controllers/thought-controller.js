const { Thought, User } = require('../models');

const thoughtController = {
    // get all thoughts 
    getThoughts(req, res) {
        Thought.find()
            .sort({ createdAt: desc })
            .then((dbThoughtData) => {
                res.json(dbThoughtData);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
    
    //get single thought by id
    getSingleThought(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
            .then((dbThoughtData) => {
                if(!dbThoughtData) {
                    return res.status(404).json({ message: 'No thought with this id!' });
                }
                res.json(dbThoughtData);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },

    // create a thought 
    createThought(req, res) {
        Thought.create(req.body)
            .then((dbThoughtData) => {
                return User.findOneAneUpdate(
                    { _id: req.body.userId },
                    { $push: { thoughts: dbThoughtData._id } },
                    { new: true }
                );
            })
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'No user found with this id!' });
                    return;
                }
                res.json(dbUserData)
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            })
    },

    // update a thought by id
    updateThought(req, res) {

    },

    // delete a thought by id
    deleteThought(req, res) {

    },

    // add reaction to a thought by id
    addReaction(req, res) {

    },

    // delete a reaction by id
    removeReaction(req, res) {

    }

}   

module.exports = thoughtController;