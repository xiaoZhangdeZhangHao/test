// src/routes/index.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BarChart from '../charts/BarChart'; 
import Test from '../charts/Test'; 
import Singke from '../singke'; 
import Fuzzyry from '../fuzzyry/index'; 
import Tanchuang from '../tanchuang/index'; 
import Kongjian from '../kongjian/index'; 
import PageContainer from '../PageContainer/index'; 
import LianDong from '../LianDong/index'; 
import MoniVue from '../moniVue/index';
import ShopTime from '../shopTime/index';
import Demo from '../demo/index';
import UseCallback from '../useCallback/useCallback';
import UseReducer from '../useReducer/useReducer';
import UseMemo from '../useMemo/useMemo';
import UseRef from '../useRef/useRef';


const RoutesComponent = () => (
  <Router>
    <Routes>
      <Route path="/barchart" element={<BarChart />} />
      <Route path="/test" element={<Test />} />
      <Route path="/singke" element={<Singke />} />
      <Route path="/fuzzyry" element={<Fuzzyry />} />
      <Route path="/tanchuang" element={<Tanchuang />} />
      <Route path="/kongjian" element={<Kongjian />} />
      <Route path="/PageContainer" element={<PageContainer />} />
      <Route path="/LianDong" element={<LianDong />} />
      <Route path="/moniVue" element={<MoniVue />} />
      <Route path="/ShopTime" element={<ShopTime />} />
      <Route path="/demo" element={<Demo />} />
      <Route path="/useCallback" element={<UseCallback />} />
      <Route path="/useReducer" element={<UseReducer />} />
      <Route path="/useMemo" element={<UseMemo />} />
      <Route path="/useRef" element={<UseRef />} />
      
      

      {/* 添加其他路由规则，每个图表一个路由 */}
      {/* <Route path="/linechart" element={<LineChart />} /> */}
      {/* ... */}
      <Route path="/" element={<PageContainer />} /> {/* 默认首页为柱状图 */}
      

    </Routes>
  </Router>
);

export default RoutesComponent;