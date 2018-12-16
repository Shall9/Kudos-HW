const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Create a new Task Schema to map Mongo documents to an object in our node application
 */
var KudoSchema = new Schema({
  title: {
    type: String,
  },
  to: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  from: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  body: {
    type: String,
  }
});

const Kudo = mongoose.model('Kudo', KudoSchema);

module.exports = Kudo;