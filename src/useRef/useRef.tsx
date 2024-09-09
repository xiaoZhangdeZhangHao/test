/**
 * 主要用于访问和操作 DOM 元素，也可以用来存储任何可变的值，而不会导致组件重新渲染。useRef 提供了一个 .current 属性，可以用来保存任何值。
 */

import React, { useRef } from 'react';
import UseRefZhi from './useRefZhi';
function TextInputWithFocusButton() {
  const inputEl = useRef<HTMLInputElement>(null); // 创建一个 ref

  const onButtonClick = () => {
    // 当按钮被点击时，让文本框获得焦点
    inputEl.current?.focus();
  };

  return (
    <>
      {/* 将 ref 关联到 input 元素 */}
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
      <UseRefZhi />
      </>
  );
}

export default TextInputWithFocusButton;