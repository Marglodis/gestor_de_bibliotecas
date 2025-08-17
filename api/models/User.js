const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true, index: true },
  passwordHash: { type: String, required: true },
  role: { type: String, enum: ['ADMIN', 'READER'], default: 'READER' }
}, { timestamps: true });

module.exports = model('User', userSchema);