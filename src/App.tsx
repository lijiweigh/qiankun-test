import React from 'react';
import './App.css';
import { Layout, Menu } from 'antd'
import { Link, withRouter, RouteComponentProps } from 'react-router-dom'

import 'antd/dist/antd.css';
import './App.less'
// import  './App.module.less'

function App(props: RouteComponentProps) {
  return (
    <Layout style={{background: '#fff'}}>
      <Layout.Header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 99,
        width: '100%'
      }}>
        <Menu theme="dark" mode="horizontal">
          <Menu.Item>
            <Link to="/app-vue/template">notify</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/app-react/form/createForm">app-react</Link>
          </Menu.Item>
          <Menu.Item>
            <span onClick={() => props.history.push('/app-react/form/formList')}>notify3</span>
          </Menu.Item>
        </Menu>
      </Layout.Header>
      <Layout.Content>
        <div id="qiankun" style={{minHeight: 'calc(100vh - 64px)', paddingTop: '64px'}}></div>
        <div className="test">adsdasasdsasds</div>
      </Layout.Content>
    </Layout>
  );
}

export default withRouter(App);
