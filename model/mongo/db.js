const mongoose = require('mongoose');
const CONNECTION =
  process.env.CONNECTION || 'mongodb://moviesdb:2b0e4222c799a6326f749c9a7984ce6f@dokku-mongo-moviesdb:27017/moviesdb';

mongoose.connect(CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// mongodb://127.0.0.1:27017/movie_catalog_backend