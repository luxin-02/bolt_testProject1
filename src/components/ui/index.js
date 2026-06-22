import Button from './Button.vue'
import Input from './Input.vue'
import Select from './Select.vue'
import Textarea from './Textarea.vue'
import Card from './Card.vue'
import Modal from './Modal.vue'

export function registerUIComponents(Vue) {
  Vue.component('UIButton', Button)
  Vue.component('UIInput', Input)
  Vue.component('UISelect', Select)
  Vue.component('UITextarea', Textarea)
  Vue.component('UICard', Card)
  Vue.component('UIModal', Modal)
}

export { Button, Input, Select, Textarea, Card, Modal }
