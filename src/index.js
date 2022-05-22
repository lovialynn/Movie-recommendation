import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import ReactDOM from 'react-dom/client';
import './index.css';
import 'antd/dist/antd.css';
import Home from './pages/home/Home';
import Detail from './pages/detail/Detail';
import Manage from './pages/manage/Manage'
import reportWebVitals from './reportWebVitals';
import Update from './pages/manage/update/Update';
import MyHeader from './component/header/header';
import { Layout } from 'antd';
import 'antd/dist/antd.css';

const { Header, Content } = Layout;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Layout >
      <BrowserRouter>
        <Header style={{ position: 'fixed', height: '70px', zIndex: 1, width: '100%', backgroundColor: 'white' }}><MyHeader /></Header>
        <Content style={{ marginTop: '70px', backgroundColor: 'white' }}>
          {/* <BrowserRouter> */}
            <Routes>
              <Route path="/">
                <Route path="detail/:movieId" element={<Detail />} />
                <Route path="/home" element={<Home />} />
                <Route path="/manage" element={<Manage />} />
                <Route path="/update" element={<Update />} />
              </Route>
            </Routes>
          {/* </BrowserRouter> */}
        </Content>
      </BrowserRouter>
    </Layout>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
