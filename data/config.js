const dbEngine = process.env.DB;
const config = require('../knexfile.js')[dbEngine];

module.exports = require('knex')(config);