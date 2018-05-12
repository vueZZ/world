import Alert from '../packages/alert/index'

const components = [
  Alert
]

const install = function(Vue, opts = {}) {

  components.map(component => {
    Vue.component(component.name, component);
  });

  // Vue.use(Loading.directive);
  // Vue.prototype.$ELEMENT = ELEMENT;
};

// TODO:作用
/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

module.exports = {
  version: '0.0.1',
  install,
};

module.exports.default = module.exports;