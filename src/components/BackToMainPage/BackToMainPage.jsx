import React from 'react'
import { Link } from 'react-router-dom'
import './BackToMainPage.css'

const BackToMainPage = () => {
  return (
    <div className='back_block'>
        <Link to='/' className='link-back_art'>
            <img alt='' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAAvElEQVRoge3ZsQkCQQBE0Y+JYAeClegVYGY7BqYmWo+JzVjDKZiegYkel7gLzrDMa2Dnwy0sHERExG9WwA5YqIfU6IAeGICLeEuxDnjwjhiAp3ZOmXHEABykiwpsgDvfESfpogKJcJEIF4lwkQgXiXCRCBdTr9ijdFGhGyYRM9XBbpr5tGD6sp+liyokxlViXCXGVVMxaxLjKTGumoqZejXvpYsqjGN67Zw6n7/eruIt1ZbAFpirh0RE/M8Lrm6gR9iWmNYAAAAASUVORK5CYII="></img>
            <p className='back-btn_title'>Назад</p>
        </Link>
    </div>
  )
}
  
export default BackToMainPage