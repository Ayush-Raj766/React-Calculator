import React from 'react'
import style from './Btn.module.css'

export default function Btn(props) {
  return (
    <div>
      <button className={style.button} onClick={props.onClick1}>{props.kay}</button>
    </div>
  )
}
