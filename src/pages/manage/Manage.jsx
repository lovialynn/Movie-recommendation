import React from 'react';
import ReactECharts from 'echarts-for-react';
import { Table, Pagination } from 'antd';
import { ageOption, sexOption } from './static';
import './manage.css';


const Home = () => {
    const options = {
        grid: { top: 8, right: 8, bottom: 24, left: 36 },
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],

        },
        yAxis: {
            type: 'value',
        },

        series: [
            {
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line',
                smooth: true,
                symbol: 'none',
                areaStyle: {
                    color: {
                        //线性渐变
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0, color: 'rgba(249, 212, 172)', // 0% 处的颜色
                        }, {
                            offset: 0.6, color: 'rgba(254, 252, 247)', // 100% 处的颜色
                        }],
                        global: false, // 缺省为 false
                    },
                },
                lineStyle: {
                    color: 'rgba(245, 209, 158)'
                }
            },
        ],
        tooltip: {
            trigger: 'axis',
        },

    };
    const columns = [
        {
            title: '电影名称',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: '电影评分',
            dataIndex: 'score',
            key: 'score',
        },
        {
            title: '电影分类',
            dataIndex: 'classification',
            key: 'classification',
        },
        {
            title: '评分者年龄',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: '评分者男女比例',
            dataIndex: 'ageRate',
            key: 'ageRate',
        },
    ];
    const dataSource = [
        {
            key: '1',
            name: '冰雪奇缘',
            score: 8.8,
            classification: '喜剧',
            age: 20,
            ageRate: 0.7
        },
        {
            key: '2',
            name: '肖申克的救赎',
            classification: '剧情 / 犯罪',
            score: 9.7,
            age: 31,
            ageRate: 1.2
        },
        {
            key: '3',
            name: '我不是药神',
            classification: '剧情 / 喜剧',
            score: 9.0,
            age: 28,
            ageRate: 1.3
        },
        {
            key: '4',
            name: '千与千寻',
            classification: '剧情 / 动画 / 奇幻',
            score: 9.4,
            age: 23,
            ageRate: 0.7
        },
        {
            key: '5',
            name: '怦然心动',
            classification: '剧情 / 喜剧 / 爱情',
            score: 9.1,
            age: 25,
            ageRate: 0.88
        },
        {
            key: '6',
            name: '绿皮书',
            classification: '剧情 / 喜剧 / 音乐 / 传记',
            score: 8.8,
            age: 29,
            ageRate: 1.05
        },
    ];


    return <div className='manage'>
        <div className='flex'>
            <div className='manageTable'>
                <Table dataSource={dataSource} columns={columns} pagination={{ pageSize: 6 }} />
            </div>
            <div>
                <div className='forAge'>
                    <div className='manageTitle'>年龄段统计</div>
                    <ReactECharts option={ageOption} style={{ width: '18vw', height: '250px', position: 'absolute', top: "-20px" }} />
                </div>
                <div className='forSex'>
                    <div className='manageTitle'>性别统计</div>
                    <ReactECharts option={sexOption} style={{ width: '18vw', height: '250px', position: 'absolute', top: "-20px" }} />
                </div>
            </div>
        </div>
        <div className='people'>
            <div className='manageTitle'>访问人数统计</div>
            <ReactECharts option={options} />
        </div>

    </div>;
}

export default Home;