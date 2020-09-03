import React from 'react';
import s from './App.module.scss'
import { Title } from '../Title/Title';
import { Timer } from '../Timer/Timer';


export function App() {

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
          <Timer count={0} />
          {/* <Settings /> */}
        </div>
        <div className={displayBoxClass}>
          {/* <Count /> */}
        </div>
        <div className={groupButtonsBoxClass}>
          {/* <Button /> */}
        </div>
      </div>
    </div>
  );
}
