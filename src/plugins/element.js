import Vue from 'vue'
import { Button, Form, Row, Col, Input, FormItem, Message, Menu, MenuItem, Submenu } from 'element-ui'

Message.install = function (Vue, options) {
  Vue.prototype.$message = Message
}
Vue.use(Message)

Vue.use(Button)
Vue.use(Input)

Vue.use(Form)
Vue.use(FormItem)

Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Submenu)

Vue.use(Row)
Vue.use(Col)
