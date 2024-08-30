const mongoose = require('mongoose');
// const CONNECTION = 'mongodb+srv://vpastdev:Ph0mSNgoEFYnpRjJ@movies.4xtpp.mongodb.net/';
const CONNECTION = 'mongodb+srv://vpastdev:Ph0mSNgoEFYnpRjJ@movies.4xtpp.mongodb.net/movies?retryWrites=true&w=majority';


mongoose.set('debug', true);

mongoose.connect(CONNECTION, {});

// 'mongodb://localhost:27017/movies'

// process.env.CONNECTION ||

// mongodb://127.0.0.1:27017/movie_catalog_backend
