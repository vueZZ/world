import Alert from '../packages/alert/index.js'
import Message from '../packages/message/index.js'
import Pagination from '../packages/pagination/index.js'
import {Carousel,CarouselItem} from '../packages/carousel/index.js'

const components = [
  Alert,
  Message,
  Pagination,
  Carousel,
  CarouselItem
]

const install = function(Vue, opts = {}) {
  components.map(component => {
    Vue.component(component.name, component)
  })
  Vue.prototype.$message = Message;
  // Vue.use(Loading.directive);
  // Vue.prototype.$ELEMENT = ELEMENT;
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

const zz = {
  install,
  ...components
}
export default zz
