const { model, Schema } = require('mongoose');

const todoSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    isCompleted: {
      type: Boolean,
      required: true
    }
  },
  { timestamps: true }
);

module.exports = model('Todo', todoSchema);
