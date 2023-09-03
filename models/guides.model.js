const { model, Schema } = require("mongoose");

const guideSchema = new Schema({
  guideName: String,
});

module.exports = model("Guide", guideSchema);
