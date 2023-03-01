const { User } = require("../models");

const userController = {
  getAllUsers(req, res) {
    User.find({})
      .populate({
        path: "thoughts",
        select: "-__v",
      })
      .select("-__v")
      .sort({ _id: -1 })
      .then((getAllUserData) => res.json(getAllUserData))
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  getUsersById(req, res) {},
  createUser({ body }, res) {
    User.create(body)
      .then((createUserData) => res.json(createUserData))
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  updateUser(req, res) {},
  deleteUser(req, res) {},
  addFriend(req, res) {},
  deleteFriend(req, res) {},
};

module.exports = userController;
