import React from 'react';
import './App.css';
import { Layout, Menu } from 'antd'
import { Link } from 'react-router-dom'

import 'antd/dist/antd.css';

function App() {
  return (
    <Layout>
      <Layout.Header>
        <Menu theme="dark" mode="horizontal">
          <Menu.Item>
            <Link to="/notify">notify</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/app-react">app-react</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/notify">notify3</Link>
          </Menu.Item>
        </Menu>
      </Layout.Header>
      <Layout.Content>
        <div id="qiankun" style={{height: 'calc(100vh - 64px)'}}></div>
      </Layout.Content>
    </Layout>
  );
}

export default App;
