

//@ts-nocheck
/**
 * 它允许你将组件的状态管理逻辑抽象成一个 reducer 函数。相比于 useState，useReducer 更适合处理复杂的状态逻辑，
 * 因为它让你能够将多个相关状态变更集中在一个地方处理，并且可以更容易地引入中间件模式。
useReducer 的基本语法如下：
const [state, dispatch] = useReducer(reducer, initialState, initializerFn);
reducer 是一个纯函数，它接受当前 state 和一个 action，并返回新的 state。
initialState 是你的初始状态。
initializerFn 是一个可选的函数，在首次调用 useReducer 时执行，用于初始化 state。
dispatch 是一个函数，用于分发 actions 到 reducer。
 */

import React, { useReducer } from 'react';

// 定义动作类型

//加 
const INCREMENT = 'INCREMENT';
//减
const DECREMENT = 'DECREMENT';

// 定义reducer函数
function counterReducer(state, action) {
  console.log(state, action);
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };
    case DECREMENT:
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter() {
  // 使用useReducer初始化状态和分发器
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: INCREMENT })}>Increment</button>
      <button onClick={() => dispatch({ type: DECREMENT })}>Decrement</button>
    </div>
  );
}

export default Counter;