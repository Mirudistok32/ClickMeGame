import React, { useState, useEffect } from 'react';
import s from './App.module.scss'
import { Title } from '../Title/Title';
import { Timer } from '../Timer/Timer';
import { ButtonClick } from '../ButtonClick/ButtonClick';
import { Count } from '../Count/Count';
import { Button } from '../Button/Button';

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
  const [maxValue, setMaxValue] = useState<number>(time.s)
  const [count, setCount] = useState<number>(0)
  const [interv, setInterv] = useState<number>(0)
  const [active, setActive] = useState<boolean>(true)

  let updateMs = time.ms
  let updateS = time.s
  let updateM = time.m
  let updateH = time.h

  const changeCount = () => {
    setCount(count + 1)
  }

  const resetCount = () => {
    setTime({ ...time, s: 0 })
    setCount(0)
  }

  const start = () => {
    run();
    setActive(false)
    setInterv(window.setInterval(run, 10))
  }

  useEffect(() => {
    if (time.s === 5) {
      stop()
      setActive(true)
    }
  }, [time.s])

  const run = () => {
    if (updateM === 60) {
      updateH++;
      updateM = 0;
    }
    if (updateS === 60) {

      updateM++;
      updateS = 0;
    }
    if (updateMs === 100) {
      updateS++;
      updateMs = 0;
    }
    updateMs++;
    return setTime({ h: updateH, m: updateM, s: updateS, ms: updateMs })
  }

  const stop = () => {
    window.clearInterval(interv)
  }

  let appClass = [s.app, 'app'].join(' ')
  let titleBoxClass = [s.title__box].join(' ')
  let timerBoxClass = [s.timer__box].join(' ')
  let displayBoxClass = [s.display__box].join(' ')
  let groupButtonsBoxClass = [s['group-buttons__box']].join(' ')


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
          <ButtonClick title={'Click'} onChangeCount={changeCount} disabled={active} />
        </div>
        <div className={groupButtonsBoxClass}>
          <Button title={'Reset'} onChangeCount={resetCount} stop={stop} disabled={!active || time.s === 0} />
          <Button title={'New game'} onClick={start} disabled={!active || time.s > 0} />
        </div>
      </div>
    </div>
  );
}
