
import { useState } from 'react'
import style from './App.module.css'
import Display from './component/Display'
import Key from './component/Key'


function App() {
  // const [count, setCount] = useState(0)
  const kay = ['C','ers','/','1','2','*','3','4','-','5','6','+','7','8','%','9','0','=']
  let [calval , setcalVal]= useState("")
  let onclick=(event)=>{
    if(event.target.innerHTML ==='C'){
      setcalVal("")
    }
    else if(event.target.innerHTML==="="){
      const result = eval (calval);
      setcalVal(result)
    }
    else if(event.target.innerHTML==="ers"){
        // setcalVal(calval)
        setcalVal(calval.slice(0,-1));
    }
    else{
      setcalVal(calval+event.target.innerHTML)
    }
    
  }
  return (
    <div className={style.calculator}>
      <Display displayval={calval}></Display>
      <Key kay ={kay} onbuttonclick={onclick}></Key>
    </div>
  )
}

export default App
