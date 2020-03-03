const mongoose = require('mongoose');

const jobSchema = mongoose.Schema({
  // user: {
  //   username: String,
  //   email: String,
  // },
  company: String,
  contact: String,
  referred_by: String,
  job_url: String,
  date_applied: Date,
  resume_url: String,
  status: String,

  company_res: Boolean,
  company_res_date: Date,
  company_res_type: String,

  reply: Boolean,
  reply_date: Date,

  inteview: Boolean,
  interview_date: Date,
  result: String,
  offer_date: Date,
  offer_url: String,

  removed: Boolean
});

module.exports = jobSchema;