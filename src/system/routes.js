import index from '../pages/index.vue'
import vuejs from '../pages/vuejs.vue'
import js from '../pages/js.vue'
import cpp from '../pages/cpp.vue'
import linux from '../pages/linux.vue'
import auth from '../pages/auth.vue'


export const routes = [
    { path: '/', component: index },
    { path: '/vuejs', component: vuejs },
    { path: '/js', component: js },
    { path: '/cpp', component: cpp },
    { path: '/linux', component: linux },
    { path: '/auth', component: auth }
]