// AgreementModal.js
//忽略ts类型检查
//@ts-nocheck
import React from 'react';
import { Alert, Modal, Table, Button } from 'antd';
import './App.css';



class AgreementModal extends React.Component {
  state = {
    visible: false,
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = (e: any) => {
    console.log('点击确定', e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = (e: any) => {
    console.log('点击取消', e);
    this.setState({
      visible: false,
    });
  };

  render() {
    const { visible } = this.state;
    const { alertMessage ,noticeMessage , columns, data} = this.props;

    return (
      <>
        <Button type="primary" onClick={this.showModal}>
          打开弹窗
        </Button>
        <Modal
          style={{ border: '1px solid black', borderRadius: '10px' }}
          width={600}
          title={
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Alert type="warning" showIcon style={{ backgroundColor: 'transparent', display: 'inline-block', border: 'none', fontSize: '20px' }} />
              <p style={{ fontSize: '13px' }}>{alertMessage}</p>
            </div>
          }
          visible={visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" onClick={this.handleCancel} style={{ backgroundColor: 'rgb(0, 93, 173)', color: 'rgb(255,255,255)' }}>
              关闭
            </Button>
          ]}
        >
          <Table columns={columns} dataSource={data} pagination={false} scroll={{ x: true }} />
          <p style={{ color: 'rgb(196, 50, 88)' }}>{noticeMessage}</p>
        </Modal>
      </>
    );
  }
}

export default AgreementModal;