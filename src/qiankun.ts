import { registerMicroApps, start } from 'qiankun'

const getActiveRule = (path: string) => (location: Location) => {
  return location.pathname.startsWith(path)
}

registerMicroApps([
  {
    name: 'reactApp',
    entry: '//localhost:3002',
    container: '#qiankun',
    activeRule: getActiveRule('/app-react'),
  },
  {
    name: 'vueApp',
    entry: '//localhost:8080',
    container: '#qiankun',
    activeRule: getActiveRule('/app-vue'),
  }
]);
// 启动 qiankun
start();