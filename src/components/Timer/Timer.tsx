import React from 'react';
import s from './Timer.module.scss'
import { TimeType } from '../App/App';


type PropsType = {
  time: TimeType
}

export const Timer: React.FC<PropsType> = React.memo((props) => {

  const { time } = props


  let timerSClass = [s.timer__s];
  let timerMSClass = [s.timer__ms];
  let timerClass = [s.timer];
  if (time.ms === 0) timerClass.push(s.timer__active)

  return (
    <div className={timerClass.join(' ')}>
      <div className={timerSClass.join(' ')}>
        {
          time.s >= 10 ? time.s : '0' + time.s
        }
      </div>
      <div className={timerMSClass.join(' ')}>
        {
          time.ms >= 10 ? time.ms : '0' + time.ms
        }
      </div>
    </div>
  );
})
