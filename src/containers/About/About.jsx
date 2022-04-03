import { motion } from 'framer-motion';
import React from 'react';
import './About.scss';
import { Images } from '../../constants';
import { FaPlay } from 'react-icons/fa';
import ModalVideo from 'react-modal-video';
import react, { useState } from 'react';

const Numbers = [
  {
    count : '4000',
    name : 'Students',
    color: '#ffba00'
  },
  {
    count : '260',
    name : 'Courses',
    color: '#ff5f72'
  },
  {
    count : '5679',
    name : 'Hours Video',
    color: '#43cb83'
  }
]

const About = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className='app__about'>
     <div className='app__bg-circle'/>
      <motion.div className='app__about-items'>
      <div className='app__about-play'>
      <img src={Images.about} className="app__about-play-img" alt="About"/>
      <img src={Images.leaf} className="app__about-leaf" alt="leaf"/>
      <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="6TxqaeEu_sw" onClose={() => setOpen(false)} />
      <button onClick={() => setOpen(true)}><FaPlay/></button>
      </div>

      <div className='app__about-info'>
      <h1 className='head-text'>Limitless learning, more 
      possibilities</h1>
      <p className='p-text'>The University of Rochester is one of the country's top-tier research universities. Our campuses are home to 200 academic majors, more than 2,000 faculty and instructional staff, and some 10,000 students—approximately half of whom are women.
      <br/>
      <br/>
      Learning at the University of Rochester is also on a very personal scale. Rochester remains one of the smallest and most collegiate among top research universities, with smaller classes, a low 10:1 student to teacher ratio, and increased interactions with faculty.
      </p>

      <div className='app__about-info-numbers'>
      {Numbers.map((item) => (
        <div className='app__about-info-number' style={{color: `${item.color}` }}>
        <h1>{item.count}</h1>
        <h4>{item.name}</h4>
        </div>
      ))}

      </div>
      </div>
      </motion.div>
    </div>
  )
}

export default About
