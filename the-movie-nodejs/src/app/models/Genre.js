const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Genre = new Schema({
  id: { type: Number },
  name: { type: String },
  // createdAt: { type: Date, default: Date.now },
  // updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Genre', Genre);
