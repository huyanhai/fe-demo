const { getFolder } = require('../utils/index.js');

module.exports = (rootPath) => {
  return {
    description: '创建组件',
    prompts: [
      {
        type: 'confirm',
        name: 'isGlobal',
        message: '是否为全局组件',
        default: false
      },
      {
        type: 'list',
        name: 'path',
        message: '请选择组件创建目录',
        choices: getFolder('src/views'),
        when: (answers) => {
          return !answers.isGlobal;
        }
      },
      {
        type: 'input',
        name: 'name',
        message: '请输入组件名称',
        validate: (v) => {
          if (!v || v.trim === '') {
            return '组件名称不能为空';
          } else {
            return true;
          }
        }
      }
    ],
    actions: (data) => {
      let path = '';
      if (data.isGlobal) {
        path = `${rootPath}/src/components/{{pascalCase name}}.vue`;
      } else {
        path = `${rootPath}/${data.path}/components/{{pascalCase name}}.vue`;
      }
      const actions = [
        {
          type: 'add',
          path: path,
          templateFile: 'component/index.hbs'
        }
      ];
      return actions;
    }
  };
};
