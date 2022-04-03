import React from 'react';
import 'react-modal-video/scss/modal-video.scss';
import './App.scss';
import { Navbar } from './components'
import { About, Footer, Home, Pages, Service } from './containers';

function App() {

  return (
    <div className="App">
    <Navbar/>
    <Home/>
    <Service/>
    <About/>
    <Pages/>
    <Footer/>

    </div>
  )
}

export default App;
