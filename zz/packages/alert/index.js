import Alert from './src/index'

Alert.install = function (Vue) {
  Vue.compont(Alert.name, Alert);
}

export default Alert