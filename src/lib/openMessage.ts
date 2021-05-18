import { createApp, h } from 'vue'
import MessageBox from './MessageBox.vue'
export const openMessageBox = (options) => {
  const { title, content, ok, cancel } = options
  const div = document.createElement('div')
  document.body.appendChild(div)

  const app = createApp({
    render() {
      return h(MessageBox, {
        visible: true,
        'onUpdate:visible': (newVisible) => {
          if (newVisible === false) {
            //@ts-ignore
            app.unmount(div)
          }
        }
      }, {
        title,
        content,
      })
    }
  })
  app.mount(div)
}