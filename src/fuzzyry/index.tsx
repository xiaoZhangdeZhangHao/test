import React from 'react';
import { Select,Space } from 'antd';

const onChange = (value: string) => {
  console.log(`selected ${value}`);
};

const onSearch = (value: string) => {
  console.log('search:', value);
};

const App: React.FC = () => (
  
  <Space wrap>
    
    <Select
      showSearch
      placeholder="a"
      optionFilterProp="label"
      onChange={onChange}
      onSearch={onSearch}
      options={[
        {
          value: 'jack',
          label: 'Jack',
        },
        {
          value: 'lucy',
          label: 'Lucy',
        },
        {
          value: 'tom',
          label: 'Tom',
        },
      ]}
    />
     <Select
      showSearch
      placeholder="b"
      optionFilterProp="label"
      onChange={onChange}
      onSearch={onSearch}
      options={[
        {
          value: 'jack',
          label: 'Jack',
        },
        {
          value: 'lucy',
          label: 'Lucy',
        },
        {
          value: 'tom',
          label: 'Tom',
        },
      ]}
    />
     <Select
      showSearch
      placeholder="c"
      optionFilterProp="label"
      onChange={onChange}
      onSearch={onSearch}
      options={[
        {
          value: 'jack',
          label: 'Jack',
        },
        {
          value: 'lucy',
          label: 'Lucy',
        },
        {
          value: 'tom',
          label: 'Tom',
        },
      ]}
    />
  </Space>
  
);

export default App;