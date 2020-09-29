import React from 'react';
import s from './Timer.module.scss'
import { TimeType } from '../App/App';


type PropsType = {
  time: TimeType
}

export const Timer: React.FC<PropsType> = React.memo((props) => {

  const { time } = props


  let timerClass = [s.timer];
  if (time.ms === 0) timerClass.push(s.timer__active)

  return (
    <div className={timerClass.join(' ')}>
      <div className={s.timer__s}>
        {
          time.s >= 10 ? time.s : '0' + time.s
        }
      </div>
      <div className={s.timer__ms}>
        {
          time.ms >= 10 ? time.ms : '0' + time.ms
        }
      </div>
    </div>
  );
})
