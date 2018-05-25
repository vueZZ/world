import Carousel from './src/index'
import CarouselItem from './src/item'

Carousel.install = function (Vue) {
  Vue.compont(Carousel.name, Carousel);
  Vue.compont(CarouselItem.name, CarouselItem);
}

export {Carousel,CarouselItem}