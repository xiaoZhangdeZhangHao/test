

//@ts-nocheck
import React, { useState, useCallback } from 'react';

function ParentComponent() {
  const [count, setCount] = useState(0);

  // 记忆化 countAdder 函数
  const countAdder = useCallback(() => {
    setCount(count + 1);
  }, [count]); // 依赖项列表，只有当 count 改变时，countAdder 才会重新创建   这里是useCallback的用法    它用于返回一个记忆化的函数，
//   这个函数在依赖项（由第二个参数数组定义）改变时才会重新创建。useCallback 可以帮助你优化性能，尤其是在父组件中传递给子组件的函数  不会因为每次渲染而改变其引用时，可以避免不必要的重新渲染。

  return (
    <div>
      <p>Count: {count}</p>
      <ChildComponent onCountAdd={countAdder} />
    </div>
  );
}



function ChildComponent({ onCountAdd }) {
  // 子组件将使用记忆化的函数作为 prop
  return (
    <button onClick={onCountAdd}>
      Add Count
    </button>
  );
}

export default ParentComponent;