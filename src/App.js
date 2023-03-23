import {useReducer, useState, useEffect} from "react";
import ShowItems from './Components/ShowItems'
import InputItems from "./Components/InputItems"
//import axios, {post} from 'axios'

function App() {
  const [idd, setId] = useState(0)
  const [text, setText] = useState('')
  const [ms, setMs] = useState('')
  console.log(ms)
  function reducer(data, action){
    if (action.type === "add"){
      if (action.message !== ''){
        setId(e=>e+ 1)
        return[
          ...data, {id:idd , message: action.message}
        ]


      }
      else{
        return data;

      }

    }
    if (action.type ==="del"){
      setId(e=>e+ 1)
      return [
          ...data.filter(i=>i.id !== action.item.id)
      ]
    }
    if(action.type === "newitem"){
      return [
          ...data.map(i=>{
            if (i.id === action.obj.id){
              return action.obj;
            }
            else return i;
          })
      ]
    }
  }

  const [data, dispatch] = useReducer(reducer, []);



  function Add(e){
    let text = e.target.value;
    setText(text)
  }
  function hundleAdd(e) {
    e.preventDefault();
    dispatch({type: "add", message: text})
    setText('')
  }
  function Del(ditem){
    console.log(ditem)
    dispatch({type: "del", item: ditem})
  }
function hundleChange(myobj){
  dispatch({
    type: "newitem",
    obj: myobj
  })
}
  return (
    <div className="App">
      <InputItems methodAdd={Add} methodHundleAdd = {hundleAdd} valueText = {text}/>
      <ShowItems dataData = {data} dataDel = {Del} hchandge = {hundleChange}/>
    </div>
  );
}

export default App;
