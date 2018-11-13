const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const reviewSchema = new mongoose.Schema({
  stars: Number,
  score: Number,
  course: Number,
  body: String,
  author: String,
  authorImgUrl: String,
  created: { type: Date, default: Date.now },
  wasHelpful: {type: Number, default: 0},
  reported: Number,
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
