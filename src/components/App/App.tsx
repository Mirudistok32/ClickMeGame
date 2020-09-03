import React from 'react';
import s from './App.module.scss'


export function App() {


  let titleBoxClass = [s.title__box];
  let displayBoxClass = [s.display__box];
  let groupButtonsBoxClass = [s['group-buttons__box']];


  return (
    <div className="app">
      <div className="app__container">
        <div className={titleBoxClass.join(' ')}>
          Click Me Please!
          {/* <Title /> */}
        </div>
        <div className={displayBoxClass.join(' ')}>
          {/* <Count /> */}
          {/* <Settings /> */}
        </div>
        <div className={groupButtonsBoxClass.join(' ')}>
          {/* <Button /> */}
        </div>
      </div>
    </div>
  );
}
