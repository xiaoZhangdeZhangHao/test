//@ts-nocheck
import React, { useState } from 'react';
import { Table, Button, RangePicker, DatePicker } from 'antd';

// 从DatePicker中提取RangePicker组件以便使用
const { RangePicker: DatePickerRangePicker } = DatePicker;

function App() {
  // 定义三个表格的列定义
  const columns1 = [
    { title: '序号', dataIndex: 'index', key: 'index' },
    { title: '总资产合计成本（元）', dataIndex: 'totalCost', key: 'totalCost' },
    { title: '无形资产（元）', dataIndex: 'intangibleAssets', key: 'intangibleAssets' },
    { title: '数据日期', dataIndex: 'dataDate', key: 'dataDate' },
    { title: '生成时间', dataIndex: 'createTime', key: 'createTime' },
    { title: '生成状态', dataIndex: 'status', key: 'status' },
    { title: '操作', key: 'action', render: (text, record) => <a href="#">下载</a> },
  ];

  const columns2 = [
    { title: '编号', dataIndex: 'number', key: 'number' },
    { title: '总金额（元）', dataIndex: 'totalAmount', key: 'totalAmount' },
    { title: '固定资产（元）', dataIndex: 'fixedAssets', key: 'fixedAssets' },
    { title: '数据日期', dataIndex: 'dataDate', key: 'dataDate' },
    { title: '生成时间', dataIndex: 'createTime', key: 'createTime' },
    { title: '状态', dataIndex: 'status', key: 'status' },
    { title: '操作', key: 'action', render: (text, record) => <a href="#">查看</a> },
  ];

  const columns3 = [
    { title: 'ID', dataIndex: 'id', key: 'id' },
    { title: '总成本（元）', dataIndex: 'totalCost', key: 'totalCost' },
    { title: '流动资产（元）', dataIndex: 'currentAssets', key: 'currentAssets' },
    { title: '数据日期', dataIndex: 'dataDate', key: 'dataDate' },
    { title: '生成时间', dataIndex: 'createTime', key: 'createTime' },
    { title: '状态', dataIndex: 'status', key: 'status' },
    { title: '操作', key: 'action', render: (text, record) => <a href="#">编辑</a> },
  ];

  // 定义三个表格的初始数据
  const initialData1 = [
    {
      index: 1,
      totalCost: 12300000,
      intangibleAssets: 10000000,
      dataDate: '2024-08-28',
      createTime: '2024-09-28 14:35:58',
      status: '成功',
    },
    // 其他数据...
  ];

  const initialData2 = [
    {
      number: 1,
      totalAmount: 12345678,
      fixedAssets: 1234567,
      dataDate: '2024-09-28',
      createTime: '2024-08-28 14:35:58',
      status: '完成',
    },
    // 其他数据...
  ];

  const initialData3 = [
    {
      id: 1,
      totalCost: 12300000,
      currentAssets: 10000000,
      dataDate: '2024-08-28',
      createTime: '2024-08-28 14:35:58',
      status: '成功',
    },
    // 其他数据...
  ];

  // 用于存储筛选后的数据
  const [filteredData1, setFilteredData1] = useState(initialData1);
  const [filteredData2, setFilteredData2] = useState(initialData2);
  const [filteredData3, setFilteredData3] = useState(initialData3);

  const [selectedTime, setSelectedTime] = useState([]);

  const handleDateChange = (dates, dateStrings) => {
    setSelectedTime(dateStrings);
    updateData(dateStrings);
  };

  const updateData = (dateStrings) => {
    // 过滤数据
    const filteredData1 = initialData1.filter(item => {
      const itemDate = new Date(item.dataDate).getTime();
      const startDate = dateStrings[0] ? new Date(dateStrings[0]).getTime() : -Infinity;
      const endDate = dateStrings[1] ? new Date(dateStrings[1]).getTime() : Infinity;
      return itemDate >= startDate && itemDate <= endDate;
    });

    const filteredData2 = initialData2.filter(item => {
      const itemDate = new Date(item.dataDate).getTime();
      const startDate = dateStrings[0] ? new Date(dateStrings[0]).getTime() : -Infinity;
      const endDate = dateStrings[1] ? new Date(dateStrings[1]).getTime() : Infinity;
      return itemDate >= startDate && itemDate <= endDate;
    });

    const filteredData3 = initialData3.filter(item => {
      const itemDate = new Date(item.dataDate).getTime();
      const startDate = dateStrings[0] ? new Date(dateStrings[0]).getTime() : -Infinity;
      const endDate = dateStrings[1] ? new Date(dateStrings[1]).getTime() : Infinity;
      return itemDate >= startDate && itemDate <= endDate;
    });

    setFilteredData1(filteredData1);
    setFilteredData2(filteredData2);
    setFilteredData3(filteredData3);
  };

  const handleReset = () => {
    setSelectedTime([]);
    setFilteredData1(initialData1);
    setFilteredData2(initialData2);
    setFilteredData3(initialData3);
  };

  return (
    <div>
      <DatePickerRangePicker onChange={handleDateChange} />
      <Button type="primary" onClick={() => updateData(selectedTime)}>查询</Button>
      <Button onClick={handleReset}>重置</Button>

      {/* 表格1 */}
      <Table columns={columns1} dataSource={filteredData1} />

      {/* 表格2 */}
      <Table columns={columns2} dataSource={filteredData2} />

      {/* 表格3 */}
      <Table columns={columns3} dataSource={filteredData3} />
    </div>
  );
}

export default App;