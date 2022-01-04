const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
const { Schema } = mongoose;

const Employee = new Schema(
  {
    name: { type: String, required: true },
    salary: { type: Number },
    department: { type: Schema.ObjectId, ref: "departments" },
  },
  { timestamps: true },
);

Employee.plugin(mongoosePaginate);

module.exports = mongoose.model("employees", Employee);
