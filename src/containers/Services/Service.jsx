import React from 'react';
import './Service.scss';
import { Images } from '../../constants';

const Services = [
  {
    imageURL : `${Images.service1}`,
    title : 'Online Education',
    color : '#f9703a'
  },
  {
    imageURL : `${Images.service2}`,
    title : 'Online Education',
    color : '#80be41'
  },
  {
    imageURL : `${Images.service3}`,
    title : 'Online Education',
    color : '#ffb258'
  }
]

const Service = () => {
  return (
    <div className='app__service'>
      <h1 className='head-text'>Our Department</h1>
      <p className='p-text'>A hundred thousands grateful loves to your dear papa and mamma. Is your poor brother recovered of his ract-punch? Oh, dear! Oh, How men should beware of wicked punch!</p>
      <div className='app__services'>
      {Services.map((item) => (
        <div className='app__service-item' style={{backgroundColor: `${item.color}`}}>
        <img src={item.imageURL} alt="Service"/>
        <h4>{item.title}</h4>
        </div>
      ))}
      </div>
    </div>
  )
}

export default Service;
