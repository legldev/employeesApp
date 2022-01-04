const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
const { Schema } = mongoose;

const Deparment = new Schema(
  {
    name: { type: String, required: true },
  },
  { timestamps: true },
);

Deparment.plugin(mongoosePaginate);

module.exports = mongoose.model("departments", Deparment);
