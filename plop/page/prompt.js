const { getFolder } = require('../utils/index.js');

module.exports = (rootPath) => {
  return {
    description: '创建页面',
    prompts: [
      {
        type: 'list',
        name: 'path',
        message: '请选择页面创建目录',
        choices: getFolder('src/pages')
      },
      {
        type: 'input',
        name: 'name',
        message: '请输入文件名',
        validate: (v) => {
          if (!v || v.trim === '') {
            return '文件名不能为空';
          } else {
            return true;
          }
        }
      }
    ],
    actions: (data) => {
      const actions = [
        {
          type: 'add',
          path: `${rootPath}/${data.path}/{{pascalCase name}}.vue`,
          templateFile: `${rootPath}/plop/page/index.hbs`,
          data: {
            componentName: `${data.name}`
          }
        }
      ];
      return actions;
    }
  };
};
