const { model, Schema } = require("mongoose");

const dashboardSchema = new Schema({
  ID: {type: Number, required: true, unique: true},
  Address: String,
  Street: String,
  City: String,
  State: String,
  postalCodeFSA: String,
  postalCodeNAN: String,
  completedJobs: Number,
  completedRevenue: String,
});

module.exports = model("Dashboard", dashboardSchema);