const { model, Schema } = require("mongoose");

const boatSchema = new Schema({
  guideName: String,
  boatName: String,
  swimlaneID: Number,
});

module.exports = model("Boat", boatSchema);