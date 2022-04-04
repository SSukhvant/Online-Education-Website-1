import React from 'react';
import './Pages.scss';
import { Images } from '../../constants';
import { motion } from 'framer-motion';

const pagesContent = [
  {
    imageURL: `${Images.graphic}`,
    title: "Photoshop CC 2018 Essential Training: The Basics",
    course: "Graphics Design",
    src: '#'
  },

  {
    imageURL: `${Images.globalsystem}`,
    title: "Get Started Coding Android Apps With Kotlin",
    course: "Global System",
    src: '#'
  },

  {
    imageURL: `${Images.cit}`,
    title: "Create Turntable Animations With Cinema 4D",
    course: "Computer & Information Technology",
    src: '#'
  },
  {
    imageURL: `${Images.webdev}`,
    title: "A Beginner’s Guide to the New Bootstrap 4 Grid",
    course: "Web Development",
    src: '#'
  },
  {
    imageURL: `${Images.art}`,
    title: "A Designer’s Guide to Vue.js Components",
    course: "Art Departments",
    src: '#'
  },
  {
    imageURL: `${Images.music}`,
    title: "Code a Swift App With Realm Mobile Database",
    course: "Music",
    src: '#'
  },
  {
    imageURL: `${Images.techinfo}`,
    title: "10 Essential Design Tips in Adobe Illustrator",
    course: "Technology Information",
    src: '#'
  },
  {
    imageURL: `${Images.datascience}`,
    title: "Modern PHP From The Beginning",
    course: "Data Science",
    src: '#'
  }
]

const Pages = () => {
  return (
    <div className='app__page-section'>
    <div className='app__pages'>
    <h1 className='head-text'>Around the University</h1>
    <div className='app__page-items'>
    {pagesContent.map((item) => (
      <motion.div
      whileInView={{ y: [-50, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__page-item"
    >
      <img src={item.imageURL} alt="course"/>
      <a src={item.src} alt="title" className='app__page-course'>{item.title}</a>
      <h6>{item.course}</h6>
      <a src={item.src} alt="keep reading" className='app__page-course-link'>Keep reading...</a>
    </motion.div>
    ))}
    
    </div>
    
    </div>
    '
    </div>
  )
}

export default Pages;
