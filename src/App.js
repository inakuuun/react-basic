import './App.css';
import Article from './components/Article';
import TextInput from './components/TextInput';
import Counter from './components/Counter';
import ToggleButton from './components/ToggleButton';
import {useEffect, useState} from "react";

var title1 = '新・日本一わかりやすいReact入門4';
var content1 = '今日のトピックはprops';


function App() {
  const [name, setName] = useState('')
  const [id, setId] = useState('deatiger')
  const ids =['deatiger', 'gaearon', 'aws', 'google', 'facebook', 'inakuuun']

  const getRandomId = () => {
    const _id = ids[Math.floor(Math.random() * ids.length)]
    setId(_id)
  }
  useEffect(()=>{
    fetch(`https://api.github.com/users/${id}`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setName(data.name)
      })
      .catch(error => {
        console.log(error)
      })
  },[id])
  
  return (
      <div>
        {
        /* ①propsのデータは{}内に記述<br/>
        ②文字列、数値、真偽値、配列、オブジェクト、日付などなんでもOK<br/>
        ③変数を渡すことも可能<br/>
        ④文字列は{}なしでも可能<br/> */
        }
  
        <Article
          title = {title1}
          content = {content1}
          delivery = 'デリバリー'
        />
        <br />
        <TextInput />
        <br />
        <Counter />
        <br />
        <ToggleButton />

        <p>{id}の、GitHub上の名前は{name}です。</p>
        <button onClick={getRandomId}>IDを変更</button>
      </div>
    );
}
export default App;
