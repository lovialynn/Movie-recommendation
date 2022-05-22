import React, { useState } from 'react'
import { Input, Button, Modal } from 'antd';
import './header.css'
import { useNavigate } from "react-router-dom";
import { HeartOutlined, EyeTwoTone } from '@ant-design/icons';

const Header = (props) => {
    console.log(props);
    let history = useNavigate();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isModalVisibleRej, setIsModalVisibleRej] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIslogin] = useState(false);


    const showModal = () => {
        setIsModalVisible(true);
    };
    const showModalRej = () => {
        setIsModalVisibleRej(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
        console.log(username);
        if (username === 'admin') {
            history("/manage");
            setIslogin(true);

        } else {
            history("/home");
            setIslogin(true);

        }
    };
    const handleOkRej = () => {
        setIsModalVisibleRej(false);
    };


    const handleCancel = () => {
        setIsModalVisible(false);
        setIsModalVisibleRej(false);
    };
    const backLogin = () => {
        setIslogin(false);
        history("/home");
    };

    return <div>
        <div className='header_div'>
            <div className='header_logo'>
                <div className='header_hreat'><HeartOutlined style={{ fontSize: '22px', color: "#f08452" }} /></div>
                <Input style={{ height: '30px', width: "300px" }} placeholder="搜索" />
            </div>
            {
                isLogin ? <div className='header_btn'>
                    <div>你好</div>
                    <Button type="primary" onClick={() => backLogin()}>退出登陆</Button>
                </div> : <div className='header_btn'>
                    <Button type="primary" onClick={() => showModalRej()}>注册</Button>
                    <Button type="primary" onClick={() => showModal()}>登陆</Button>
                </div>
            }


        </div>
        <Modal
            title="登陆"
            className='header_modal'
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
            okText="登陆"
            cancelText="取消"
        >
            <Input placeholder="用户名" value={username} onChange={(e) => {
                console.log(e);
                setUsername(e.target.value)
            }} />
            <Input type="password" placeholder="密码" value={password} onChange={(e) => setPassword(e.value)} />
        </Modal>
        <Modal
            title="注册"
            className='header_modal'
            visible={isModalVisibleRej}
            onOk={handleOk}
            onCancel={handleOkRej}
            okText="注册"
            cancelText="取消"
        >
            <Input placeholder="用户名" />
            <Input placeholder="手机号" />
            <Input placeholder="年龄" />
            <Input placeholder="性别" />
            <Input
                placeholder="密码"
                type="password"
            // iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            />
            {/* <Input.Password  style={{height:"30px",width:"80%"}} placeholder="密码" /> */}
        </Modal>
    </div>

}

export default Header;