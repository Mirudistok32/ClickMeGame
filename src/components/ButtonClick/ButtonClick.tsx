import React from 'react';
import s from './ButtonClick.module.scss'

type PropsType = {
  title: string
  onChangeCount?: () => void
  start?: () => void
  disabled: boolean
}

export const ButtonClick: React.FC<PropsType> = (props) => {

  const { title, onChangeCount, start, disabled } = props

  let buttonClass = [s.button];
  if(disabled) buttonClass.push(s.disabled)

  const handleClick = () => {
    onChangeCount && onChangeCount()
    start && start()
  }

  return (
    <button className={buttonClass.join(' ')} onClick={handleClick} disabled={disabled}>
      {
        title
      }
    </button>
  );
}
