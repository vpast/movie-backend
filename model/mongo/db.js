const mongoose = require('mongoose');
const CONNECTION = process.env.ATLAS_DB;


mongoose.set('debug', true);

mongoose.connect(CONNECTION, {});