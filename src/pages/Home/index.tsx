import React, { useState } from 'react';
import { Layout } from 'antd';
import Styled from './style';

import Sidebar from '../../components/Sidebar';
import { UserOutlined, BookOutlined, SettingOutlined, DatabaseOutlined } from '@ant-design/icons';
import { ItemType } from 'antd/es/menu/hooks/useItems';
import ReportList from '../../components/HomePage/ReportList';
import Navbar from '../../components/Navbar';

const { Content } = Layout;

const items: ItemType[] = [
  {
    key: '1',
    icon: <BookOutlined />,
    label: 'Report'
  }
];
export function Home() {
  const [collapsed, setCollapsed] = useState(false);
  const [currentKey, setCurrentKey] = useState('1');
  return (
    <>
      <Styled>
        <Layout style={{ minHeight: '100vh' }}>
          <Sidebar
            collapsed={collapsed}
            setCollapsed={setCollapsed}
            items={items}
            currentKey={currentKey}
            setCurrentKey={setCurrentKey}
          />
          <Layout>
            <Navbar />
            <Content
              style={{
                margin: '30px 30px',
                padding: 24,
                background: 'white',
                borderRadius: '10px'
              }}>
              {currentKey == '1' && <ReportList />}
            </Content>
          </Layout>
        </Layout>
      </Styled>
    </>
  );
}
