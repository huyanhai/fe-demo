const {
  readFileSync,
  existsSync,
  writeFileSync,
  lstatSync,
  readdirSync
} = require('fs');

const getFolder = (path) => {
  let components = [path];
  const files = readdirSync(path);
  files.forEach(function (item) {
    let stat = lstatSync(path + '/' + item);
    if (stat.isDirectory() === true && item != 'components') {
      components.push(path + '/' + item);
      components.push.apply(components, getFolder(path + '/' + item));
    }
  });
  return [...new Set(components)];
};

const writeTplFile = (filePath, TplCtx, flag) => {
  if (!existsSync(filePath)) {
    throw Error(`${filePath} is not exist!`);
  }
  let fileCtx = readFileSync(filePath, 'utf-8');
  fileCtx = fileCtx.replaceAll(flag, TplCtx);
  writeFileSync(filePath, fileCtx, 'utf-8');
};

module.exports = {
  getFolder,
  writeTplFile
};
