const { Schema, model } = require('mongoose');
const bookSchema = new Schema({
  title: { type: String, required: true, index: true },
  author: { type: String, required: true },
  year: Number,
  status: { type: String, enum: ['AVAILABLE', 'LOANED'], default: 'AVAILABLE' }
}, { timestamps: true });
module.exports = model('Book', bookSchema);