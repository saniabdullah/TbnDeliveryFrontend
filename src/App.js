import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { Footer, Navbar } from './container';
import { images } from './constants';

import './App.scss';
import { Testimonial, Contact, Tracking, Admin, PriceList, Login, AddWa } from './components';
const App = () => {

  const [testimonials, setTestimonials] = useState([
    {imgurl: images.adidas, name: "zul", feedback: "good", company: "Google"},
    {imgurl: images.adidas, name: "zul", feedback: "good", company: "Google"},
    {imgurl: images.adidas, name: "zul", feedback: "good", company: "Google"},

  ]);
  return (

      <div className='app'>
          {/* <nav className="app__navbar">
            <div className="app__navbar-logo">
              <img src={images.TbnLogo} alt="logo" />
            </div>
          </nav> */}
          <Navbar />
          <Router>
          <div className='main-container'>
            <Switch>
              <Route exact path="/">
                <Tracking />
                <PriceList />
                <Testimonial />
                <Contact />
              </Route>
              <Route path='/login'>
                <Login />
              </Route>
              <Route path='/admin-tbn-delivery'>
                <Admin />
              </Route>
              <Route path='/admin-wa-tbn-delivery'>
                <AddWa />
              </Route>
            </Switch>
          </div>
          </Router>
          <Footer />
      </div>

  )
}

export default App