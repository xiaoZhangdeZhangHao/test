import React from 'react';
import './index.css'; // 确保你的CSS文件被正确导入
const GridLayoutExample = () => {
  return (
    <div className="grid-container">
      <header className="grid-item header">保单成本率看板</header>
      <main className="grid-item main">
        <div className="column column-1">
          {[
            '个客整体',
            '互联网阿信啊待会',
            '个客整体',
            '个客整体'
          ].map((text, index) => {
            // 定义颜色数组
            const colors = [
              'rgb(15,208,147)',
              'rgb(220,67,171)',
              'rgb(32,114,237)',
              'rgb(240,101,70)',
            ];

            // 计算索引，确保不会越界
            const colorIndex = index % colors.length;
            const color = colors[colorIndex];

            // 动态生成样式对象
            const textStyle = { backgroundColor: color, color: 'white' };
            const percentStyle = { color };

            return (
              <div key={index}>
                <p style={textStyle}>{text}</p>
                <div>
                  <p>保费 ¥126,560.00</p>
                  <p>保单成本率 <span style={percentStyle}>3%</span></p>
                </div>
              </div>
            );
          })}

        </div>
        <div className="column column-2">
          <div>
            <span className="circle-text">保费</span>
            <span>¥126,560.00</span>
            <span>保单成本率 </span>
            <span>3%</span>
            <span>全司整体</span>
          </div>
        </div>
        <div className="column column-3">
          {[
            '个客整体',
            '互联网阿信啊待会',
            '个客整体',
            '个客整体'
          ].map((text, index) => {
            // 定义颜色数组
            const colors = [
              'rgb(130,85,235)',
              'rgb(237,165,47)',
              'rgb(86,209,204)',
              'rgb(239,91,107)',
            ];

            // 计算索引，确保不会越界
            const colorIndex = index % colors.length;
            const color = colors[colorIndex];

            // 动态生成样式对象
            const textStyle = { backgroundColor: color, color: 'white' };
            const percentStyle = { color };

            return (
              <div key={index}>
                <div>
                  <p>¥126,560.00 保费</p>
                  <p><span style={percentStyle}>3%</span> 保单成本率</p>
                </div>
                <p style={textStyle}>{text}</p>
              </div>
            );
          })}
        </div>
        <img src="./圆环.png" alt="圆环图像" className="overlay-image" />
        <div></div>
      </main>
    </div>
  );
};

export default GridLayoutExample;