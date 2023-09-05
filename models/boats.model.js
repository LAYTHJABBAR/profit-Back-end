const { model, Schema } = require("mongoose");

const boatSchema = new Schema({
  guideName: String,
  boatName: {type: String, required: true, unique: true},
  swimlaneID: Number,
});

module.exports = model("Boat", boatSchema);