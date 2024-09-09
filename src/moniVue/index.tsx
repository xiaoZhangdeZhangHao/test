// @ts-nocheck

// 模拟v-model
import React,{ useState,useMemo, useEffect } from 'react';

function Example () {
    const [value,setValue] = useState('')
    const [watch,setWatch] = useState('')
    const [memoValue,setMemoValue] = useState('')
    //模拟Vue 中的 watch

    const handleChange = (e:any) => {
        setValue(e.target.value)
    }
    //监听输入的值，可以让监听的值一直变大
    useEffect(() => {
        setValue(value.toLocaleUpperCase())
    },[value]
    )

    //模拟Vue 中的 computed  实现数据的缓存  useMemo  避免重复计算
    const save = useMemo(() => {
        return value.toLocaleUpperCase()
    })

    return (
        <div>
            <input type="text" value={value} onChange={handleChange} />
            <p>模拟Vue的双向数据绑定Value: {value}</p>
            <p>模拟Vue的Watch属性：{watch}</p>
            <p>模拟Vue的computed属性,实现数据的缓存：{save}</p>
        </div>
    )
}

export default Example;