import React from 'react';
import s from './Title.module.scss'

type PropsType = {
  title: string
}

export const Title: React.FC<PropsType> = (props) => {

  const { title } = props

  let titleClass = [s.title].join(' ');
  let spanClass = [s.span].join(' ');

  const collectionStyleColors = [
    'lightgreen',
    'lightsalmon',
    'lightseagreen',
    'lightcoral',
    'khaki',
    'indianred',
    "hotpink",
    'gold',
    'fuchsia',
    'dodgerblue',
    'deepskyblue',
    'darkorange',
    'crimson'
  ]
  // { color: collectionStyleColors[Math.floor(Math.random() * collectionStyleColors.length + 1)] }

  const titleWatching = title.split('').map((i, inx) => {
    if (i !== ' ') {
      return <span key={i + inx} className={spanClass}>{i}</span>
    } else {
      return i
    }
  })


  console.log(titleWatching);
  return (
    <div className={titleClass}>
      {
        titleWatching
      }
    </div>
  );
}
