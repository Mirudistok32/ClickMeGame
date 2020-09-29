import React from 'react';
import s from './Count.module.scss'


type PropsType = {
  count: number
}

export const Count: React.FC<PropsType> = React.memo((props) => {

  const { count } = props

  let titleBoxClass = [s.count].join(' ');


  return (
    <div className={titleBoxClass}>
      {
        count
      }
    </div>
  );
})
