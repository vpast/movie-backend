const mongoose = require('mongoose');
const CONNECTION = process.env.CONNECTION || 'mongodb://localhost:27017/movies';


mongoose.set('debug', true);

mongoose.connect(CONNECTION, {});

// mongodb://127.0.0.1:27017/movie_catalog_backend
