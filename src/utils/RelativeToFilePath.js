const path = require('path');

module.exports = (Url_Path) => path.join(
    __dirname,
    path.relative(__dirname, Url_Path)
);
