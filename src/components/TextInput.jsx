import React, {useState} from 'react';

// ・入力フォームでよく使う
// ・onChangeイベントでhandleName関数に入力した文字を渡す
// ・handleName関数のパラメータにあるeventを更新関数に渡す
// ・inputの値として、更新した値を表示する
const TextInput = () => {
    const [name, setName] = useState('')
    const handleName = (event)=> {
        setName(event.target.value)
    }
    return(
        <div>
            <h3>入力値を出力</h3>
            <input
                onChange={(event) => handleName(event)}
                type={'text'}
            />
            <span>{name}</span>
        </div>
    );
};
export default TextInput;
