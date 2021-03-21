var mongoose = require('mongoose');
const Schema = mongoose.Schema;

// The factSchema is used to embedded docs in as student doc.
// There is no model and no 'facts' collection
var reviewSchema = new mongoose.Schema({
  text: String,
  rating: {type: Number, min: 1, max: 5, default: 5}
}, {
  timestamps: true
});

var storeSchema = new mongoose.Schema({
  name: String,
  phone: String,
  address: String,
  email: String,
  review: [reviewSchema],
  googleId: String
}, {
  timestamps: true
});

module.exports = mongoose.model('Store', storeSchema);