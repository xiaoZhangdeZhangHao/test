/**
 * 它用于缓存计算结果，以便在依赖项未改变的情况下重用之前的计算结果。这对于避免在每次渲染时重复复杂的计算尤其有用，从而提高应用性能。
 */
import React, { useState, useMemo } from 'react';
interface Props {
  a: number;
  b: number;
}

function MyComponent({ a, b }: Props){
  const [count, setCount] = useState(0);

  // 计算 a 和 b 的乘积，并记忆化这个值
  const result = useMemo(() => {
    console.log('Computing a * b');
    return a * b;
  }, [a, b]);

  return (
    <div>
      <p>The result of a * b is {result}</p>
      <p>Count: {count}</p>
      <button onClick={() => setCount(c => c + 1)}>Increase count</button>
    </div>
  );
}

export default function App() {
  const [a, setA] = useState<number>(10);
  const [b, setB] = useState<number>(5);

  return (
    <div>
      <input value={a} onChange={e => setA(Number(e.target.value))} type="number" />
      <input value={b} onChange={e => setB(Number(e.target.value))} type="number" />
      <MyComponent a={a} b={b} />
    </div>
  );
}