// AnotherComponent.js
//@ts-nocheck
import React from 'react';
import AgreementModal from './AgreementModal ';

const AnotherComponent = () => {
  const columns = [
    {
      title: '序号',
      dataIndex: 'key',
      key: 'key',
    },
    {
      title: '附加协议编号',
      dataIndex: 'agreementNo',
      key: 'agreementNo',
    },
    {
      title: '附加协议名称',
      dataIndex: 'agreementName',
      key: 'agreementName',
    },
  ];

  const data = [
    {
      key: 1,
      agreementNo: 'XXXXX',
      agreementName: 'XXXXX',
    },
    {
      key: 2,
      agreementNo: 'XXXXX',
      agreementName: 'XXXXX',
    },
    {
      key: 3,
      agreementNo: 'XXXXX',
      agreementName: 'XXXXX',
    },
  ];
  return (
    <div>
      <h1>另外一个组件</h1>
      <p>实现组件跳转</p>
      <AgreementModal
        alertMessage="您正在进行新增主协议操作，该渠道已有有关主协议的附加协议，列表如下："
        noticeMessage="若附加协议需顺延，请修改关联主协议并提交审核!"
        columns={columns}
        data={data}
      />
    </div>
  );
};

export default AnotherComponent;