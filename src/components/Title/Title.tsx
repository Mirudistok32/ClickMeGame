import React, { MouseEvent } from 'react';
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

  const handleMouseEnter = (e: MouseEvent<HTMLSpanElement>) => {
    e.currentTarget.style.color = collectionStyleColors[Math.floor(Math.random() * collectionStyleColors.length + 1)]
  }

  const handleMouseLeave = (e: MouseEvent<HTMLSpanElement>) => {
    e.currentTarget.style.color = '#fff'
  }

  const titleWatching = title.split('').map((i, inx) => {
    if (i !== ' ') {
      return <span
        key={i + inx}
        className={spanClass}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >{i}</span>
    } else {
      return i
    }
  })

  return (
    <div className={titleClass}>
      {
        titleWatching
      }
    </div>
  );
}
