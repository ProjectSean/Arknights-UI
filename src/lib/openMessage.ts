import { createApp, h } from 'vue'
import MessageBox from './MessageBox.vue'
export const openMessageBox = (options) => {
  const { title, content, closeOnClickOverlay, ok, cancel } = options
  const div = document.createElement('div')
  document.body.appendChild(div)
  const close = () => {
    //@ts-ignore
    app.unmount(div)
    div.remove()
  }
  const app = createApp({
    render() {
      return h(MessageBox, {
        visible: true,
        'onUpdate:visible': (newVisible) => {
          if (newVisible === false) {
            close()
          }
        },
        closeOnClickOverlay, ok, cancel
      }, {

        title,
        content,
      })
    }
  })
  app.mount(div)
}