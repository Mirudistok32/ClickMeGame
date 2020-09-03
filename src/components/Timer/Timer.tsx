import React from 'react';
import s from './Timer.module.scss'


type PropsType = {
  count: number
}

export const Timer: React.FC<PropsType> = (props) => {

  const { count } = props

  let timerClass = [s.timer].join(' ');

  return (
    <div className={timerClass}>
      {
        count
      }
    </div>
  );
}
