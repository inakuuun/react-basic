import React, {useState} from 'react';

const Counter = (event) => {
    const [count, setCount] = useState(0)
    // prevStateは更新前のstateを指す
    // カウントアップ
    const countUp = () => {
        setCount(prevState => prevState + 1)
    }
    // 1秒待ってから更新という方法も可能
    // const countUp = () => {
    //     setTimeout(() => setCount(prevState => prevState + 1),1000)
    // }
    // カウントダウン
    const countDown = () => {
        if(count > 0)
        {
            setCount(prevState => prevState - 1)
        }
    }

    const [count2, setCount2] = useState(0)
    // カウント2アップ
    const count2Up = () => {
        setCount2(prevState => prevState + 1)
    }
    // 1秒待ってから更新という方法も可能
    // const countUp = () => {
    //     setTimeout(() => setCount(prevState => prevState + 1),1000)
    // }
    // カウント2ダウン
    const count2Down = () => {
        if(count2 > 0)
        {
            setCount2(prevState => prevState - 1)
        }
    }

    // // 毎回実行される
    // React.useEffect(() => {
    //     console.log(count)
    // })

    // // 初回のみ実行される
    // React.useEffect(() => {
    // 	console.log(count)
    // },[])

    // countの値が変わるたびに実行される
    React.useEffect(() => {
    	console.log(count)
    },[count])

    // // countかsetCountの値が変更されるたびに実行される
    // React.useEffect(() => {
    // 	console.log(count)
    // },[count, count2])

    return(
        <div>
            <h3>カウントアップ</h3>
            <button onClick={countDown}>-</button>
            <span>&ensp;</span>
            <button onClick={countUp}>+</button>
            <span> {count}</span>
            <h3>カウント2アップ</h3>
            <button onClick={count2Down}>-</button>
            <span>&ensp;</span>
            <button onClick={count2Up}>+</button>
            <span> {count2}</span>
        </div>
    );
};
export default Counter;