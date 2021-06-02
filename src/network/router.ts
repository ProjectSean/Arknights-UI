import { createWebHashHistory, createRouter } from 'vue-router'

import Home from '../views/Home.vue'
import Doc from '../views/Doc.vue'

import Intro from '../components/Home/Intro.vue'
import Start from '../components/Home/Start.vue'
import Training from '../components/Home/Training.vue'
import Switch from '../components/SwitchDemo.vue'
import MessageBox from '../components/MessageBoxDemo.vue'
import Tabs from '../components/TabsDemo.vue'
import Button from '../components/ButtonDemo.vue'

const history = createWebHashHistory()
export const router = createRouter({
  history,
  routes: [
    {
      path: '/',
      redirect: 'home'
    },
    {
      path: '/home',
      component: Home,
      children: [
        {
          path: '',
          component: Intro
        },
        {
          path: 'intro',
          component: Intro
        },
        {
          path: 'start',
          component: Start
        },
        {
          path: 'training',
          component: Training
        },
      ]
    },
    {
      path: '/doc',
      component: Doc,
      children: [
        {
          path: '',
          redirect: '/doc/switch'
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
          path: 'messagebox',
          component: MessageBox
        },
        {
          path: 'tabs',
          component: Tabs
        }
      ]
    }
  ]
})
