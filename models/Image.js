const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ImageSchema = new Schema(
  {
    imagePath: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = Image = mongoose.model('Image', ImageSchema);
