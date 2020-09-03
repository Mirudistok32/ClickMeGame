import React from 'react';
import s from './Button.module.scss'

type PropsType = {
  title: string
  onChangeCount?: () => void
}

export const Button: React.FC<PropsType> = (props) => {

  const { title, onChangeCount } = props

  let buttonClass = [s.button].join(' ');

  const handleClick = () => {
    onChangeCount && onChangeCount()
  }

  return (
    <button className={buttonClass} onClick={handleClick}>
      {
        title
      }
    </button>
  );
}
