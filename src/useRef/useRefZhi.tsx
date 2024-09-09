import React, { useState, useRef, useEffect } from 'react';

function Timer() {
    const [count, setCount] = useState(0);
    const timeoutId = useRef<NodeJS.Timeout | null>(null); // 保存一个计时器 ID

    useEffect(() => {
        // 在组件挂载时设置计时器
        timeoutId.current = setTimeout(() => {
            setCount(c => c + 1);
        }, 1000);

        // 清除计时器，避免内存泄漏
        return () => {
            if (typeof timeoutId.current === 'number') {
                clearTimeout(timeoutId.current);
            }
        };
    }, [
    ]); // 仅在挂载时运行

    return (
        <div>
            <p>Count: {count}</p>
        </div>
    );
}

export default Timer;