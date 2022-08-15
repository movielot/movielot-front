import React, { useState } from 'react';
import 'antd/dist/antd.min.css';
import './App.css';
import { UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Movie from './pages/movie/Movie';

const { Header, Content, Sider } = Layout;

// TODO. to be fixed later.
const menus = [
  {
    key: '현재 상영중인 영화',
    children: [
      {
        key: '액션',
        icon: UserOutlined,
        children: [{ key: '한국' }, { key: '일본' }],
      },
      {
        key: '로맨스',
        icon: UserOutlined,
      },
    ],
  },
  {
    key: '새로운 기능',
    children: [
      {
        key: '메뉴1',
        icon: UserOutlined,
        children: [{ key: '서브메뉴 1' }, { key: '서브메뉴 2' }],
      },
      {
        key: '메뉴2',
        icon: UserOutlined,
      },
    ],
  },
];

const topMenus = menus.map((item) => {
  return {
    key: item.key,
    label: item.key,
  };
});

const subMenus = (currentKey) =>
  menus
    .filter((menu) => menu.key === currentKey)
    .flatMap((selectedMenu) => {
      return selectedMenu.children.map((subMenu) => {
        return {
          key: subMenu.key,
          label: subMenu.key,
          icon: subMenu.icon ? React.createElement(subMenu.icon) : null,
          children:
            subMenu.children && subMenu.children.length > 0
              ? subMenu.children.map((child) => {
                  return {
                    key: child.key,
                    label: child.key,
                  };
                })
              : null,
        };
      });
    });

const App = () => {
  const [currentMenu, setCurrentMenu] = useState('현재 상영중인 영화');
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Layout>
          <Header className="header">
            {/* TODO. plz icon here! */}
            <div className="logo">MOVIELOT</div>
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={currentMenu}
              items={topMenus}
              onClick={(event) => {
                setCurrentMenu(event.key);
              }}
            />
          </Header>
          <Layout>
            <Sider width={200} className="site-layout-background">
              <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{
                  height: '100%',
                  borderRight: 0,
                }}
                items={subMenus(currentMenu)}
              />
            </Sider>
            <Layout
              style={{
                padding: '24px 24px',
              }}
            >
              <Content
                className="site-layout-background"
                style={{
                  padding: 24,
                  margin: 0,
                  minHeight: 280,
                }}
              >
                <Breadcrumb
                  style={{
                    padding: 10,
                  }}
                >
                  <Breadcrumb.Item>{currentMenu}</Breadcrumb.Item>
                </Breadcrumb>
                <Routes>
                  <Route path="/" element={<Movie />} />
                </Routes>
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </div>
    </BrowserRouter>
  );
};

export default App;
