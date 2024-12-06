import React from 'react'
import style from './Display.module.css';

export default function Display({displayval}) {
  return (
    <div>
      <input className={style.display} type="text" value={displayval} readOnly/>
    </div>
  )
}
