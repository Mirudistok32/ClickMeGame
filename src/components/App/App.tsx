import React, { useState, useEffect, useCallback } from 'react';
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

  const [maxValue, setMaxValue] = useState<number>(5)
  const [time, setTime] = useState<TimeType>(timeDefault)
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
    setTime({ ...time, s: 0, ms: 0 })
    setCount(0)
  }

  const start = () => {
    run();
    setActive(false)
    setInterv(window.setInterval(run, 10))
  }
  const stop = useCallback(() => {
    window.clearInterval(interv)
  }, [interv])


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

  useEffect(() => {
    if (time.s === maxValue) {
      stop()
      setActive(true)
    }
  }, [time.s, stop, maxValue])


  let appClass = [s.app, 'app']
  let titleBoxClass = [s.title__box]
  let timerBoxClass = [s.timer__box]
  let displayBoxClass = [s.display__box]
  let groupButtonsBoxClass = [s['group-buttons__box']]


  return (
    <div className={appClass.join(' ')}>
      <div className="container">
        <div className={titleBoxClass.join(' ')}>
          <Title title={'Click Me Game!'} />
        </div>
        <div className={timerBoxClass.join(' ')}>
          <Timer time={time} />
        </div>
        <span>
          {
            `You have ${maxValue} seconds`
          }
        </span>
      </div>
      <div className={displayBoxClass.join(' ')}>
        <Count count={count} />
        <ButtonClick title={'Click'} onChangeCount={changeCount} disabled={active} />
      </div>
      <div className={groupButtonsBoxClass.join(' ')}>
        <Button title={'Reset'} onChangeCount={resetCount} stop={stop} disabled={!active || time.s === 0} />
        <Button title={'New game'} onClick={start} disabled={!active || time.s > 0} />
      </div>
    </div>
  );
}
