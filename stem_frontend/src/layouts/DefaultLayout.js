import Header from './Header';
import Left from './Left';
import React from 'react';
import { Layout } from 'antd';
const { Sider, Content } = Layout;
export default function DefaultLayout({ children }) {
  return (
    <>
      <Layout>
        <Header> </Header>{' '}
      </Layout>{' '}
      <Layout style={{ minHeight: '100vh' }}>
        <Layout>
          <Sider width="25%" theme="light" collapsible collapsedWidth={0}>
            {' '}
            <Left> </Left>{' '}
          </Sider>{' '}
          <Content style={{ margin: '16px' }}> {children} </Content>{' '}
          <Sider width="25%" theme="light" collapsible collapsedWidth={0}>
            {' '}
            {/* Đặt nội dung thanh right ở đây */}{' '}
          </Sider>{' '}
        </Layout>{' '}
      </Layout>{' '}
    </>
  );
}
