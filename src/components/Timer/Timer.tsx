import React, { useState, useEffect } from 'react';
import s from './Timer.module.scss'


type PropsType = {
  count: number
}

export const Timer: React.FC<PropsType> = (props) => {

  const { count } = props
  const [second, setSecond] = useState<number>(count)

  let timerClass = [s.timer].join(' ');

  const changeCount = () => {

  }
  


  return (
    <div className={timerClass} onClick={changeCount}>
      {
        second
      }
    </div>
  );
}
