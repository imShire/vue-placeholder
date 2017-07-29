/**
 * Vue-placeholder
 * @author ixu.me
 */
'use strict'
import VuePlaceholder from './placeholder'

VuePlaceholder.install = function (Vue) {
    Vue.component('v-placeholder', VuePlaceholder)
}

 /**
  * When required globally
  */
if (typeof (window) !== 'undefined' && typeof (window.Vue) !== 'undefined') {
    window.Vue.use(VuePlaceholder)
}

export default VuePlaceholder
