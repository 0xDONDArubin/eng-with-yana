import React, { useState } from 'react'
import './ReadMore.css'

const ReadMore = ({ text }) => {

  const [isReadMoreShow, setIsReadMoreShow] = useState(false)

  const openText = (e) => {
    setIsReadMoreShow(prevState => !prevState)
  }

  return (
    <div className='article-current-text'>
      {isReadMoreShow ? text : ''}
      <button className='read-more_btn' onClick={openText}> {isReadMoreShow ? "🡹 Скрыть" : "🡻 Читать далее... "}</button>
    </div>
  )
}

export default ReadMore