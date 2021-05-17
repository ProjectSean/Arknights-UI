import { createWebHashHistory, createRouter } from 'vue-router'

import Home from '../views/Home.vue'
import Doc from '../views/Doc.vue'

import Docdemo from '../components/Docdemo.vue'
import Switch from '../components/SwitchDemo.vue'
import Dialog from '../components/DialogDemo.vue'
import Tabs from '../components/TabsDemo.vue'
import Button from '../components/ButtonDemo.vue'

const history = createWebHashHistory()
export const router = createRouter({
  history,
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/doc',
      component: Doc,
      children: [
        {
          path: '',
          component: Docdemo
        },
        {
          path: 'switch',
          component: Switch
        },
        {
          path: 'button',
          component: Button
        },
        {
          path: 'dialog',
          component: Dialog
        },
        {
          path: 'tabs',
          component: Tabs
        }
      ]
    }
  ]
})
