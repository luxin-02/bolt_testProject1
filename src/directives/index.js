import permission from './permission'
import loading from './loading'

export default function setupDirectives(Vue) {
  Vue.directive('permission', permission)
  Vue.directive('loading', loading)
}
