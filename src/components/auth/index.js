import AuthForm from './AuthForm.vue'
import DividerWithText from './DividerWithText.vue'
import SocialButtons from './SocialButtons.vue'

export function registerAuthComponents(Vue) {
  Vue.component('AuthForm', AuthForm)
  Vue.component('DividerWithText', DividerWithText)
  Vue.component('SocialButtons', SocialButtons)
}

export { AuthForm, DividerWithText, SocialButtons }
