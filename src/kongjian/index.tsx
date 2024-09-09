// @ts-nocheck
import React, { useState } from 'react';
import { ProFormGroup, ProFormCheckboxGroup, ProFormDatePicker, ProFormSelect, ProFormText,ProForm,ProFormCheckbox } from '@ant-design/pro-form';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn'; // 导入所需的语言包

const YourFormComponent = () => {
  const [mainAdditionalAgreement, setMainAdditionalAgreement] = useState('20'); // 假设这是从某处获取的
  const [agreementInfo, setAgreementInfo] = useState({
    isAgreementInfoChecked: false,
    endDate: undefined,
    isAutoRenew: '0',
    automaticRenewalTerm: undefined,
    renewalExpirationDate: undefined,
  });
  const [form] = useState({}); // 这里应该是您的表单状态管理，我这里用一个空对象代替

  // 假设这是主协议的数据
  const mainAgreement = {
    endDate: dayjs().add(3, 'year').toDate(),
    isAutoRenew: '1',
    automaticRenewalTerm: '3',
    renewalExpirationDate: dayjs().add(6, 'year').toDate(),
  };

  // 处理协议失效信息复选框的变化
  const handleAgreementCheckboxChange = (values) => {
    if (values.includes('1010')) {
      setAgreementInfo({
        isAgreementInfoChecked: true,
        ...mainAgreement,
      });
      form.setFieldsValue({
        endDate: mainAgreement.endDate,
        isAutoRenew: mainAgreement.isAutoRenew,
        automaticRenewalTerm: mainAgreement.automaticRenewalTerm,
        renewalExpirationDate: mainAgreement.renewalExpirationDate,
      });
    } else {
      setAgreementInfo(prev => ({
        ...prev,
        isAgreementInfoChecked: false,
      }));
      // 这里可以重置表单项的值
    }
  };

  // 处理自动续约变化
  const handleAutoRenewChange = (value) => {
    if (!agreementInfo.isAgreementInfoChecked) {
      form.setFieldsValue({
        isAutoRenew: value,
      });
      setAgreementInfo(prev => ({
        ...prev,
        isAutoRenew: value,
      }));
      // 根据是否自动续约来设置续约年限和续约失效日期的可选状态
      if (value === '1') {
        // 设置续约年限和续约失效日期的值
      } else {
        form.setFieldsValue({
          automaticRenewalTerm: undefined,
          renewalExpirationDate: undefined,
        });
      }
    }
  };

  // 处理续约年限变化
  const handleAutomaticRenewalTermChange = (value) => {
    if (!agreementInfo.isAgreementInfoChecked) {
      const newRenewalDate = calculateRenewalDate(form.getFieldValue('endDate'), value);
      form.setFieldsValue({
        automaticRenewalTerm: value,
        renewalExpirationDate: newRenewalDate,
      });
      setAgreementInfo(prev => ({
        ...prev,
        automaticRenewalTerm: value,
        renewalExpirationDate: newRenewalDate,
      }));
    }
  };

  // 计算续约失效日期的函数
  const calculateRenewalDate = (endDate, term) => {
    return dayjs(endDate).add(term, 'year').toDate();
  };

  return (
    <form>
      {/* 跟随主协议 */}
      {mainAdditionalAgreement === '20' && (
        <ProForm.Group>
          <ProFormCheckbox.Group
            label="跟随主协议"
            options={[
              {
                label: '协议失效信息',
                value: '1010',
              },
            ]}
            initialValue={['1010']}
            onChange={handleAgreementCheckboxChange}
          />
        </ProForm.Group>
      )}

      {/* 协议失效日期    自动续约*/}
      <ProForm.Group>
        <ProFormDatePicker
          name="endDate"
          label="协议失效日期"
          disabled={agreementInfo.isAgreementInfoChecked}
          value={agreementInfo.endDate}
          onChange={(date) => {
            // 更新协议失效日期逻辑
          }}
        />
        <ProFormSelect
          name="isAutoRenew"
          label="自动续约"
          options={[
            { value: '1', label: '是' },
            { value: '0', label: '否' },
          ]}
          value={agreementInfo.isAutoRenew}
          onChange={handleAutoRenewChange}
        />
      </ProForm.Group>

      {/* 自动续约年限   续约失效日期*/}
      <ProForm.Group>
        <ProFormSelect
          name="automaticRenewalTerm"
          label="自动续约年限"
          options={[
            { value: '1', label: '1年' },
            { value: '2', label: '2年' },
            { value: '3', label: '3年' },
          ]}
          value={agreementInfo.automaticRenewalTerm}
          disabled={agreementInfo.isAutoRenew === '0'}
          onChange={handleAutomaticRenewalTermChange}
        />
        <ProFormText
          name="renewalExpirationDate"
          label="续约失效日期"
          disabled
          value={agreementInfo.renewalExpirationDate ? dayjs(agreementInfo.renewalExpirationDate).format('YYYY-MM-DD') : ''}
        />
      </ProForm.Group>
    </form>
  );
};

export default YourFormComponent;