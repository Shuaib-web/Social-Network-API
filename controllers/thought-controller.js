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
  getThoughtById({ params }, res) {
    Thought.findOne({ _id: params.id })
      .populate({
        path: "reactions",
        select: "-__v",
      })
      .select("-__v")
      .then((getThoughtByIdData) => {
        if (!getThoughtByIdData) {
          res
            .status(404)
            .json({ message: "No Thought with this Id was found!" });
          return;
        }
        res.json(getThoughtByIdData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  createThought({ body }, res) {
    Thought.create(body)
      .then((_id) => {
        return User.findOneAndUpdate(
          { _id: body.userId },
          { $push: { thoughts: _id } },
          { new: true }
        );
      })
      .then((createThoughtData) => {
        if (!createThoughtData) {
          res.status(404).json({ message: "No User found with this Id!" });
          return;
        }
        res.json(createThoughtData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  updateThought(req, res) {},
  deleteThought(req, res) {},
  addReaction(req, res) {},
  deleteReaction(req, res) {},
};

module.exports = thoughtController;
