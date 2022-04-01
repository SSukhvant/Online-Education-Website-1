import React from 'react';
import './Navbar.scss';
import { Images } from '../../constants';

const Navbar = () => {
  return (
    <nav>
    <div className='app__navbar'>
      <div className='app__navbar-logo'>
      <img src={Images.Logo} alt="Logo"/>
      </div>
      
      <div className='app__navlinks'>
      <ul>
      {['Study', 'About Us', 'Admission', 'Pages', 'News', 'Contact'].map((item) => (
        <li className='app__navlink' key={`link-${item}`}>
        <a href={`#${item}`} >{item}</a>
        </li>
      ))}
      </ul>
      <button href="#" className='app__navbar-btn'>Apply now</button>
      </div>
      </div>
    </nav>
  )
}

export default Navbar;
