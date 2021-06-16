import { UserConfigExport, ConfigEnv } from 'vite'
import { viteMockServe } from 'vite-plugin-mock'
import vue from '@vitejs/plugin-vue'
// const { resolve } = require('path')
// https://vitejs.dev/config/
export default ({ command }: ConfigEnv): UserConfigExport => {
  const isBuild = command === 'build';
  return{
    plugins: [
      vue(),
      viteMockServe({
        ignore: /^\_/,
        mockPath: 'mock',
        localEnabled: !isBuild,
        prodEnabled: isBuild,
        injectCode: `
          import { setupProdMockServer } from './mock/_createProductionServer';
    
          setupProdMockServer();
          `,
      })
    ]
  }
}
