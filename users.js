const express = require("express");

const router = express.Router();

const User = require("../models/user.model");

router.post("/", (req, res) => {
  const t_name = req.body.name;
  const t_email = req.body.email;
  const t_password = req.body.password;
  const t_type = req.body.type;

  const user = new User({
    name: t_name,
    email: t_email,
    password: t_password,
    type: t_type,
  });
  user
    .save()
    .then((user) => res.status(200).send(user))
    .catch((err) => res.status(400).send(err));
});

router.get("/", (req, res) => {
  User.find().select("name -_id")
    .then((users) => res.status(200).send(users))
    .catch((err) => res.status(400).send(err));
});

module.exports = router;
