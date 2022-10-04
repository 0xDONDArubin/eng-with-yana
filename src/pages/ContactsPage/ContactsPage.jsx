import React from 'react'
import BackToMainPage from '../../components/BackToMainPage/BackToMainPage'
import './ContactsPage.css'

const ContactsPage = () => {
  return (
    <>
      <BackToMainPage />
      <div className='contacts-block'>
        <div className='contacts-block_container'>
          <p className='tel'>+7-987-357-13-90</p>
          <marquee className='marquee' direction="left" scrollamount="8" vspace="100px">Telegram WhatsApp Viber</marquee>
          <p className='email'>engwithyana@gmail.com</p>
        </div>
      </div>
    </>
  )
}

export default ContactsPage
