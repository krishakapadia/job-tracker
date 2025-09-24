const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  title: { type: String, required: true },
  company: { type: String, required: true },
  status: { type: String, default: "applied" }, // applied / interview / rejected
  resume: { type: String } // path to uploaded resume
}, { timestamps: true });

module.exports = mongoose.model("Job", JobSchema);
