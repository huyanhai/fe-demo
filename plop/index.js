const { resolve } = require('path');
const page = require('./page/prompt.js');
const component = require('./component/prompt.js');
const store = require('./store/prompt.js');

module.exports = (plop) => {
  const rootPath = resolve(__dirname, '../');
  // controller generator
  plop.setWelcomeMessage('请选择要创建的类型：');
  plop.setGenerator('page', page(rootPath));
  plop.setGenerator('component', component(rootPath));
  plop.setGenerator('store', store(rootPath));
};
