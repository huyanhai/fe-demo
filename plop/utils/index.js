const fs = require('fs');

const getFolder = (path) => {
  let components = [];
  const files = fs.readdirSync(path);
  files.forEach(function (item) {
    let stat = fs.lstatSync(path + '/' + item);
    if (stat.isDirectory() === true && item != 'components') {
      components.push(path + '/' + item);
      components.push.apply(components, getFolder(path + '/' + item));
    }
  });
  return components;
};

module.exports = {
  getFolder
};
