import React from 'react';
import s from './App.module.scss'
import { Title } from '../Title/Title';


export function App() {

  let appClass = [s.app, 'app'].join(' ')
  let titleBoxClass = [s.title__box].join(' ')
  let displayBoxClass = [s.display__box].join(' ')
  let groupButtonsBoxClass = [s['group-buttons__box']].join(' ')


  return (
    <div className={appClass}>
      <div className="container">
        <div className={titleBoxClass}>
          <Title title={'Click Me Please!'} />
          {/* <Title /> */}
        </div>
        <div className={displayBoxClass}>
          {/* <Count /> */}
          {/* <Settings /> */}
        </div>
        <div className={groupButtonsBoxClass}>
          {/* <Button /> */}
        </div>
      </div>
    </div>
  );
}
