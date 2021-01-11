import { registerMicroApps, start } from 'qiankun'

registerMicroApps([
  {
    name: 'reactApp',
    entry: '//localhost:3001',
    container: '#qiankun',
    activeRule: '/app-react',
  },
  // {
  //   name: 'vueApp',
  //   entry: '//localhost:8080',
  //   container: '#container',
  //   activeRule: '/app-vue',
  // }
]);
// 启动 qiankun
start();