import Vue from 'vue'
import wrap from '@vue/web-component-wrapper'

import App from './App.vue'
import VueWebComponent from './components/VueWebComponent'
import Button from './components/Button'
import Spinner from './components/Spinner'


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

const CustomElement = wrap(Vue, VueWebComponent)
window.customElements.define('my-custom-element', CustomElement)

window.customElements.define('my-button', wrap(Vue, Button))
window.customElements.define('my-spinner', wrap(Vue, Spinner))

// should have export defaults
