const User = require("../model/mongo/User");

const list = async (req, res, next) => {
  const { skip = 0, limit = 5 } = req.query;
  try {
    res.json({
      count: await User.countDocuments(),
      items: await User.find()
        .skip(+skip)
        .limit(+limit),
    });
  } catch (error) {
    next(error);
  }
};

const getById = async (req, res, next) => {
  try {
    res.json({
      item: await User.findOne({ id: req.params.id }),
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { list, getById };
