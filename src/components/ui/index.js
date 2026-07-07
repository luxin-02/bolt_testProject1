import Button from './Button.vue'
import Input from './Input.vue'
import Select from './Select.vue'
import Textarea from './Textarea.vue'
import Card from './Card.vue'
import Modal from './Modal.vue'

export function registerUIComponents(Vue) {
  Vue.component('ui-button', Button)
  Vue.component('ui-input', Input)
  Vue.component('ui-select', Select)
  Vue.component('ui-textarea', Textarea)
  Vue.component('ui-card', Card)
  Vue.component('ui-modal', Modal)
}

export { Button, Input, Select, Textarea, Card, Modal }
