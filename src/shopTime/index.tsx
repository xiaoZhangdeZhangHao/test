
//@ts-nocheck
import React, { useState, useEffect } from 'react';

const CountdownCard = () => {
    const [countdown, setCountdown] = useState(10);
    const [isPurchased, setIsPurchased] = useState(false);

    useEffect(() => {
        let intervalId;

        if (countdown > 0) {
            intervalId = setInterval(() => {
                setCountdown(prevCountdown => prevCountdown - 1);
            }, 1000);

            
        } else {
            setIsPurchased(true);
        }


        //清除定时器   减少内存压力
        return () => {
            clearInterval(intervalId);
        };
    }, [countdown]);


    
    //模拟请求
    // const handleRequest = () => {
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             resolve
    //         }, 1000);
    //     }).then(() => {
    //         console.log('请求成功');
    //         setIsPurchased(true);
            
    //     }).catch(() => {
    //         console.log('请求失败');
    //     })
    // }
    const handlePurchase = () => {


        setTimeout(() => {
            setIsPurchased(false);
        }, 1000);

    }
    return (
        <div
            style={{
                height: '136px',
                width: '430px',
                borderRadius: '12px',
                backgroundColor: '#FFF0F1',
                paddingRight: '24px',
                paddingLeft: '30px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                margin: '0 auto',

            }}
        >
            <div style={{ width: '300px',overflow:'hidden'}}>
                <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>杭州市通用5元券</h1>
                <p style={{ fontSize: '22px', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>杭味面馆杭味面馆杭味面馆杭味面馆杭味面馆杭味面馆杭味面馆杭味面馆杭味面馆杭味面馆杭味面馆</p>
            </div>
            <button
                style={{
                    width: '108px',
                    height: '45px',
                    borderRadius: '8px',
                    fontSize: '20px',
                    fontWeight: 'bold',
                    backgroundColor: isPurchased ? '#F00' : '#F00',
                    color: '#fff',
                    cursor: 'pointer',
                    border: 'none',
                }}
                onClick={handlePurchase}
                disabled={countdown > 0}
            >
                {countdown > 0 ? `${countdown}s` : isPurchased ? '**抢购**' : '**已抢购'}
            </button>
        </div>
    );
};

export default CountdownCard;