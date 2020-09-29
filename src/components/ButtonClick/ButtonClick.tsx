import React, { useState } from 'react';
import s from './ButtonClick.module.scss'

type PropsType = {
  title: string
  onChangeCount?: () => void
  start?: () => void
  disabled: boolean
  clickMe?: boolean
}

export const ButtonClick: React.FC<PropsType> = React.memo((props) => {

  const { title, onChangeCount, start, disabled, clickMe } = props

  const [isClick, setIsClick] = useState<boolean>(false)

  let buttonClass = [s.button];
  if (disabled) buttonClass.push(s.disabled)
  if (clickMe) buttonClass.push(s.clickMe)
  if(isClick) buttonClass.push(s.isClick)

  const handleClick = () => {
    onChangeCount && onChangeCount()
    start && start()
    setIsClick(false)
  }

  const handleOnMouseDown = () => {
    setIsClick(true)
  }

  return (
    <button
      className={buttonClass.join(' ')}
      onClick={handleClick}
      disabled={disabled}
      onMouseDown={handleOnMouseDown}
    >
      {
        title
      }
    </button>
  );
})
