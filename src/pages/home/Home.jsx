import React from 'react';
import { Space } from 'antd';
import img1 from './image/p01.webp';
import img2 from './image/p02.webp';
import img3 from './image/p03.webp';
import img4 from './image/p04.webp';
import img5 from './image/p05.webp';
import img6 from './image/p06.webp';
import img7 from './image/p07.webp';
import img8 from './image/p08.webp';
import img9 from './image/p09.webp';
import img10 from './image/p10.webp';
import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
    const obj = [
        {
            id: "01",
            img: img1,
            title: "千与千寻"
        },
        {
            id: "02",
            img: img2,
            title: "我不是药神"
        },
        {
            id: "10",
            img: img10,
            title: "肖生克的救赎"
        },
        {
            id: "03",
            img: img3,
            title: "送你一朵小红花"
        }, {
            id: "04",
            img: img4,
            title: "少年的你"
        }, {
            id: "05",
            img: img5,
            title: "长津湖之水门桥"
        }, {
            id: "06",
            img: img6,
            title: "长津湖"
        }, {
            id: "07",
            img: img7,
            title: "奇迹 笨小孩"
        }, {
            id: "08",
            img: img8,
            title: "中国医生"
        }, {
            id: "09",
            img: img9,
            title: "星际穿越"
        },
    ]
    return <div style={{ backgroundColor: 'white' }}>
        <Space className='home_space' size={[40, 40]} wrap align="center" direction="horizontal">
            {obj.map((item, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <Link to={`/detail/${item.id}`} >
                    <div key={index} className='home_item'>
                        <img src={item.img}></img>
                        <div>{item.title}</div>
                    </div>
                </Link>

            ))}
        </Space>
    </div>
}

export default Home;