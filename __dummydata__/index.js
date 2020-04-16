const getDummyData = filename => {
  const dd = require("path")
    .basename(filename)
    .replace(".test.js", ".dd.js");

  return require(`./per-file/${dd}`);
};

module.exports = getDummyData;
