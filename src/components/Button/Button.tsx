import React from 'react';
import s from './Button.module.scss'

type PropsType = {
  title: string
  onChangeCount?: () => void
  stop?: () => void
  onClick?: () => void
  disabled?: boolean
}

export const Button: React.FC<PropsType> = React.memo((props) => {

  const { title, onChangeCount, stop, onClick, disabled } = props

  let buttonClass = [s.button];
  if(disabled) buttonClass.push(s.disabled)

  const handleClick = () => {
    onChangeCount && onChangeCount()
    stop && stop()
    onClick && onClick()
  }

  return (
    <button className={buttonClass.join(' ')} onClick={handleClick} disabled={disabled}>
      {
        title
      }
    </button>
  );
})
