import React, { useState } from 'react';
import s from './App.module.scss'
import { Title } from '../Title/Title';
import { Timer } from '../Timer/Timer';
import { Button } from '../Button/Button';
import { Count } from '../Count/Count';

export type TimeType = {
  ms: number
  s: number
  m: number
  h: number
}

const timeDefault: TimeType = {
  h: 0,
  m: 0,
  s: 0,
  ms: 0
}

export function App() {

  const [time, setTime] = useState<TimeType>(timeDefault)
  const [count, setCount] = useState<number>(0)


  const changeCount = () => {
    setCount(count + 1)
  }






  let appClass = [s.app, 'app'].join(' ')
  let titleBoxClass = [s.title__box].join(' ')
  let timerBoxClass = [s.timer__box].join(' ')
  let displayBoxClass = [s.display__box].join(' ')
  // let groupButtonsBoxClass = [s['group-buttons__box']].join(' ')


  return (
    <div className={appClass}>
      <div className="container">
        <div className={titleBoxClass}>
          <Title title={'Click Me Game!'} />
        </div>
        <div className={timerBoxClass}>
          <Timer time={time} />
        </div>
        <div className={displayBoxClass}>
          <Count count={count} />
          <Button title={'Click'} onChangeCount={changeCount} />
        </div>
      </div>
    </div>
  );
}
