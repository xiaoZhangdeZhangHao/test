// src/Chart.tsx
import React, { useEffect } from 'react';
import ECharts from 'echarts-for-react';

interface IProps {
  // 可以在这里定义传递给图表的属性
}

const Chart: React.FC<IProps> = (props) => {
  useEffect(() => {
    // 如果需要在图表渲染后执行额外的Echarts配置，可以在这里编写
  }, []);

  const getOption = (): any => {
    return {
      title: {
        text: 'ECharts 示例'
      },
      tooltip: {},
      legend: {
        data: ['销量']
      },
      xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
      },
      yAxis: {},
      series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }]
    };
  };

  return (
    <ECharts
      option={getOption()}
      notMerge={true}
      lazyUpdate={false}
      style={{ height: 400,width: '100%' }}
    />
  );
};

export default Chart;