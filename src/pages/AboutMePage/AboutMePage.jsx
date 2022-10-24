import React from 'react'
import './AboutMePage.css'
import BackToMainPage from '../../components/BackToMainPage/BackToMainPage'
import img from '../../img/1.png';
// import img2 from '../../img/mdd.jpg';

const AboutMePage = () => {
  return (
    <>
      <BackToMainPage />
      <div className='about-me_block'>
        <div className="about-me_container">
          <div className="about-me_container2">
            <div className="about-me_text">
              <p>
                Меня зовут Яна. Я являюсь студенткой факультета иностранных языков и лингводидактики. Все педагогические и лингвистические дисциплины освоены мной на «отлично». Мой педагогический путь начался 2 года назад, хотя преподавание увлекло меня гораздо раньше. Я являюсь педагогом в 3 поколении. Свою жизнь я непременно хочу связать с методикой преподавания. Не так давно вдохновилась написанием статей на методические и лингвистические темы, что стало поводом публикации в научном журнале.
                С моей первой статьей, которая поступила в печать, вы можете ознакомиться на сайте.
                <br>
                На моем счету 1632 часа проведённых занятий. На уроках я совмещаю коммуникативный и классический подход. Занятия провожу на английском языке, переходя на русский язык лишь в крайней необходимости.
                Внедряю элементы геймификации и отталкиваюсь от интересов учеников. Самостоятельно разрабатываю игры на онлайн платформах. Помимо лингвистического аспекта иностранного языка, учитываю и экстралингвистический аспект для полного погружения в мир изучаемой дисциплины.
                На уроках с малышами и младшими школьниками использую предметно-языковое интегрированное обучение.
                Работаю с разными возрастами и уровнями знания английского языка. Моему самому младшему ученику 4 года, а самому старшему 63.
                Для каждого ученика разрабатываю индивидуальную программу, которая основывается на поставленной цели, типе модальности. Занятия провожу в оффлайн и онлайн форматах.
              </p>  
            </div>
            <div className="about-me_img">
              <img className='about-me_current-img' alt='' src={img} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutMePage
