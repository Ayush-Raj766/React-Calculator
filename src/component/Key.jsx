import React from 'react'
import style from './Key.module.css'
import Btn from './Btn'
export default function Key(props) {
  return (
    <div>
      <div className={style.btncont}>
        {props.kay.map((some)=>(<Btn kay ={some} key={some} onClick1={props.onbuttonclick}/>))}
      </div>
    </div>
  )
}
