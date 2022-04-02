import React from 'react';
import { motion } from 'framer-motion';
import './Home.scss';

const Home = () => {
  return (
    <div id="home" className='app__home'>
    <motion.div
    whileInView={{ x: [-100, 0], opacity: [0, 1] }}
    transition={{ duration: 0.5 }}
    className="app__home-intro"
    >
    <h1>Innovation for eduction <br/>and society</h1>
    <p>Our interdisciplinary majors and minors mean you can 
    chart your own course for academic success.</p>
    <button className='app__home-btn'>Visit our Campus</button>
    </motion.div>
  </div>
  )
}

export default Home;
