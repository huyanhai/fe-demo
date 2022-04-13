const { resolve } = require('path');
const { camelCase, paramCase, pascalCase } = require('change-case');

const { writeTplFile } = require('./utils/index.js');

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

  // 自定义脚本
  plop.setActionType('registerStore', (answers) => {
    const { name } = answers;
    const indexPath = `${rootPath}/src/store/index.ts`;
    const importTpl = `export * from './modules/${camelCase(
      name
    )}';\n// import here`;
    writeTplFile(indexPath, importTpl, '// import here');
    // if (!existsSync(indexPath)) {
    //   throw Error(`${indexPath} is not exist!`);
    // }
    // let fileCtx = readFileSync(indexPath, 'utf-8');
    // fileCtx = fileCtx.replaceAll(`// import here`, importTpl);
    // writeFileSync(indexPath, fileCtx, 'utf-8');
  });

  plop.setActionType('addRoute', (answers) => {
    const { name, path } = answers;
    const indexPath = `${rootPath}/src/router/routes/index.ts`;
    const routePath = path.replaceAll('src/views', '');
    const addTpl = `,
  {
    path: '${routePath ? routePath + '/' : '/'}${paramCase(name)}',
    name: '${pascalCase(name)}',
    component: () => import('@/${path.replaceAll('src/', '')}/${pascalCase(
      name
    )}.vue')
  } // add here`;
    writeTplFile(indexPath, addTpl, ' // add here');

    // if (!existsSync(indexPath)) {
    //   throw Error(`${indexPath} is not exist!`);
    // }
    // let fileCtx = readFileSync(indexPath, 'utf-8');
    // fileCtx = fileCtx.replaceAll(` // add here`, addTpl);
    // writeFileSync(indexPath, fileCtx, 'utf-8');
  });
};
