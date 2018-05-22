import Carousel from './src/index'

Carousel.install = function (Vue) {
  Vue.compont(Carousel.name, Carousel);
}

export default Carousel