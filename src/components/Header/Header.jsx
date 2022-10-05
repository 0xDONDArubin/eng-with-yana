import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header className='header'>
      <nav className='nav'>
        <Link className='link' to={'/about'}>About me</Link>
        <Link className='link' to={'/articles'}>Articles</Link>
        <Link className='link' to={'/contacts'}>Contacts</Link>
      </nav>
    </header>
  ) 
}

export default Header 
