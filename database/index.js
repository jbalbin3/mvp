// database code
const mongoose = require('mongoose');
const jobSchema = require('./schema.js');
mongoose.set('useFindAndModify', false);
const mongoUri = 'mongodb://localhost/jobs-app';
mongoose.Promise = global.Promise;

const db = mongoose.createConnection(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const Job = db.model('Job', jobSchema);

module.exports = Job;