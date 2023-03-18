import React, { useState } from 'react';
import { Layout } from 'antd';
import Styled from './style';

import Sidebar from '../../components/Sidebar';
import { BookOutlined, DashboardOutlined, LineChartOutlined } from '@ant-design/icons';
import { ItemType } from 'antd/es/menu/hooks/useItems';
import ReportList from '../../components/HomePage/ReportList';
import LandingPage from '../../components/HomePage/LandingPage';
import Visualization from '../../components/HomePage/Visualization';

const { Content } = Layout;

const items: ItemType[] = [
  {
    key: '1',
    icon: <DashboardOutlined />,
    label: 'Dashboard'
  },
  {
    key: '2',
    icon: <BookOutlined />,
    label: 'Report'
  },
  {
    key: '3',
    icon: <LineChartOutlined />,
    label: 'Visualization'
  }
];
export function Home() {
  const [collapsed, setCollapsed] = useState(false);
  const [currentKey, setCurrentKey] = useState('3');
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
            <Content
              style={{
                margin: '30px 30px',
                padding: 24,
                background: 'white',
                borderRadius: '10px'
              }}>
              {currentKey === '1' && <LandingPage />}
              {currentKey === '2' && <ReportList />}
              {currentKey === '3' && <Visualization />}
            </Content>
          </Layout>
        </Layout>
      </Styled>
    </>
  );
}
