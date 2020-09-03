import React, { useState } from 'react';
import s from './Timer.module.scss'
import { TimeType } from '../App/App';


type PropsType = {
  time: TimeType
}

export const Timer: React.FC<PropsType> = (props) => {

  const { time } = props




  let timerClass = [s.timer].join(' ');

  return (
    <div className={timerClass} >
      {
        time.s >= 10 ? time.s : '0' + time.s
      }
    </div>
  );
}
