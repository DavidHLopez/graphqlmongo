const { Schema, model } = require("mongoose");

const taskSchema = new Schema({
  quote: {
    type: String,
    required: true,
  },
  author: {
    type: String,
  },
});

module.exports = model("Task", taskSchema);
