const { default: mongoose } = require("mongoose");
const mongoode = require("mongoose");

const offerSchema = new mongoose.Schema({
  dish: { type: String,required:true },
  dishImg: { type: String,required:true },
  price: { type: String,required:true },
  restaurant: { type: String,required:true },
  city: { type: String,required:true },
});

const Offer = mongoose.model("Offer", offerSchema);

module.exports= Offer;
