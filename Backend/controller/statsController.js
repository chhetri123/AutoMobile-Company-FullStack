const Stats = require("../model/statsModel");
const catchAsync = require("../Utills/catchAsync");
exports.getAllstats = catchAsync(async (req, res) => {
  const autoCompanyStats = await Stats.getAllStats();
  const statsInArr = autoCompanyStats.map((stats) => stats[0]);
  res.status(200).json({ status: 200, stats: statsInArr });
});

exports.getStatsOfQuery = catchAsync(async (req, res) => {
  const statsOfquery = await Stats.getAllDataFromQuery(req.query.query);
  if (!Array.isArray(statsOfquery)) {
    const operation = req.query.query.split(" ")[0].toUpperCase();
    res
      .status(200)
      .json({ status: 201, msg: `:${operation} is Successfully done` });
    return;
  }
  res
    .status(200)
    .json({ status: 200, result: statsOfquery.length, stats: statsOfquery });
});
