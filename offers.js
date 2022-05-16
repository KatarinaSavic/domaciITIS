const router = require("express").Router();

const Offer = require("../models/offer.model");

router.get("/", (req, res) => {
  Offer.find()
    .select("-__v")
    .then((offers) => res.status(200).send(offers))
    .catch((err) => res.status(400).send(err));
});

router.post("/", (req, res) => {
  const t_dish = req.body.dish;
  const t_dishImg = req.body.dishImg;
  const t_price = req.body.price;
  const t_restaurant = req.body.restaurant;
  const t_city = req.body.city;

  const offer = new Offer({
    dish: t_dish,
    dishImg: t_dishImg,
    price: t_price,
    restaurant: t_restaurant,
    city: t_city,
  });
  offer
    .save()
    .then((user) => res.status(200).send(user))
    .catch((err) => res.status(400).send(err));
});

router.get("/:id", (req, res) => {
  Offer.findById(req.params.id)
    .then((o) => {
      if (o != null) res.status(200).send(o);
      else res.status(404).send("Ponuda ne postoji");
    })
    .catch((err) => res.status(500).send(err));
});

router.delete("/:id", (req, res) => {
  Offer.findByIdAndDelete(req.params.id)
    .then((o) => {
      if (o != null) res.status(200).send(o);
      else res.status(404).send("Ponuda ne postoji");
    })
    .catch((err) => res.status(500).send(err));
});

router.put("/:id", (req, res) => {
  Offer.findByIdAndUpdate(req.params.id, req.body.offer, { new: true })
    .then((o) => {
      if (o != null) res.status(200).send(o);
      else res.status(404).send("Ponuda ne postoji");
    })
    .catch((err) => res.status(500).send(err));
});

module.exports = router;
