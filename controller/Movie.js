const Movie = require("../model/mongo/Movie");
const MovieComment = require("../model/mongo/MovieComment")

const list = async (req, res, next) => {
  try {
    const { skip = 0, limit = 5, similar, start_year, end_year, genre, year } = req.query;
    const criteria = {}
    const sort = {}
    if (similar) {
      sort["imdb.rating"] = -1
      const similarMovie = await Movie.findById(similar);
      criteria.genres={
        $all:similarMovie.toObject().genres
      }
      criteria._id = {$ne:similar}
    }
    if (start_year) {
      criteria.year= {
        $gte: start_year,
      }
    }
    if (end_year) {
      if (!criteria.year) {
        criteria.year = {}
      }
      criteria.year.$lte = end_year
    }
    if (genre) {
      criteria.genres=genre
    }
    if (year) {
      criteria.year=year
    }
    res.json({
      count: await Movie.countDocuments(criteria),
      items: await Movie.find(criteria)
        .skip(+skip)
        .limit(+limit)
        .sort(sort)
    });
  } catch (error) {
    next(error);
  }
};

const getById = async (req, res, next) => {
  try {
    res.json({
      item: await Movie.findById( req.params.id ),
      comments: await MovieComment.find({movie_id: req.params.id})
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { list, getById };
