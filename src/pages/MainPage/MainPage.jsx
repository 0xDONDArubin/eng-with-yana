import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import MainSection from '../../components/MainSection/MainSection'

const MainPage = () => {
  return (
    <div style={{width: 'inherit', height: 'inherit'}}>
      <Header/>
      <MainSection/>
      <Footer/>
    </div>
  )
}

export default MainPage