const { Thought, User } = require("../models");

const thoughtController = {
  getAllThoughts(req, res) {
    Thought.find({})
      .populate({
        path: "reactions",
        select: "-__v",
      })
      .select("-__v")
      .then((getAllThoughtData) => res.json(getAllThoughtData))
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  getThoughtById(req, res) {},
  createThought(req, res) {},
  updateThought(req, res) {},
  deleteThought(req, res) {},
  addReaction(req, res) {},
  deleteReaction(req, res) {},
};

module.exports = thoughtController;
