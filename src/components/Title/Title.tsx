import React, { MouseEvent } from 'react';
import s from './Title.module.scss'

type PropsType = {
  title: string
}

export const Title: React.FC<PropsType> = React.memo((props) => {

  //Пропсы
  const { title } = props

  //Классы
  let titleClass = [s.title].join(' ');
  let spanClass = [s.span].join(' ');

  //коллекция hover цветов
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

  //Получение рандомных цветов
  const randomColor = () => {
    return collectionStyleColors[Math.floor(Math.random() * collectionStyleColors.length)]
  }

  //Выход указателя мышки из элемента
  const handleMouseEnter = (e: MouseEvent<HTMLSpanElement>) => {
    e.currentTarget.style.color = randomColor()
  }

  //Выход указателя мышки из элемента
  const handleMouseLeave = (e: MouseEvent<HTMLSpanElement>) => {
    e.currentTarget.style.color = '#fff'
  }

  //Строку из пропсов, разделяем по буквенно на массив, а затем возвращаем преобразованный массив. Каждую букву окутываем в span
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
})
