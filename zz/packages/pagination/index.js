import Pagination from './src/index'

Pagination.install = function (Vue) {
  Vue.compont(Pagination.name, Pagination);
}

export default Pagination