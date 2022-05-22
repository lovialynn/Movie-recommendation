export  const ageOption = { 
    tooltip: {
      trigger: 'item'
    },
    legend: {
        top: 'bottom'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['30%', '60%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '20',
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 20, name: '10 - 20岁' },
          { value: 50, name: '20 - 30岁'},
          { value: 25, name: '30 - 40岁' },
          { value: 5, name: '40 - 50岁' },
        ]
      }
    ]
  };

export const sexOption = {
    // title: {
    //   text: 'Referer of a Website',
    //   subtext: 'Fake Data',
    //   left: 'center'
    // },
    tooltip: {
      trigger: 'item'
    },
    legend: {
        top: '200',
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '50%',
        data: [
          { value: 1048, name: '男' },
          { value: 735, name: '女' },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };