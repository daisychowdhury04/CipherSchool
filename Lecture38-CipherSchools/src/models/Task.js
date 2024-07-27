const { model, Schema } = require("mongoose");

const taskSchema = new Schema(
  {
    title: {
      type: string,
      required: true,
    },
    description: {
      type: string,
      required: true,
    },
    iscompleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true
  }
);

const taskmodel=model("Task",taskSchema);
module.exports=taskmodel 