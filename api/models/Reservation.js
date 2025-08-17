const { Schema, model, Types } = require('mongoose');
const reservationSchema = new Schema({
  userId: { type: Types.ObjectId, ref: 'User', required: true, index: true },
  bookId: { type: Types.ObjectId, ref: 'Book', required: true, index: true },
  startDate: { type: Date, default: Date.now },
  endDate: { type: Date },
  status: { type: String, enum: ['ACTIVE', 'CANCELLED', 'FINISHED'], default: 'ACTIVE' }
}, { timestamps: true });
module.exports = model('Reservation', reservationSchema);