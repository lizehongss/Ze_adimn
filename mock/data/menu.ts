import { MockMethod } from 'vite-plugin-mock'
import { resultSucces } from '../_util'
const menuData = [
  { 
    name: '基本组件',
    code: 'baseComponents',
    children:   [{
      name: '表格组件',
      code: 'tableComponent'
    }]
  }
]
export default [
  { 
    url: '/menu-server/getMenuListById',
    timeout: 1000,
    method: 'get',
    response: ({ query }) => {
      const {id} = query
      if (id === '1') {
        return resultSucces(menuData)
      }

    }
    
  }
] as MockMethod[]