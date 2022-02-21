import React from 'react'
import About from './components/About'
import Work from './components/Work'
import Contact from './components/Contact'
import Nav from './components/Nav'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import './App.css';
import ScrollToTop from './components/ScrollToTop'
import useDarkMode from './hooks/useDarkMode'

function App() {
  useDarkMode();
  return (
    <div className="poppins dark:bg-gray-900 dark:text-white">
      <BrowserRouter>
      <ScrollToTop />
          <Nav />
          <div className="flex w-full">
            <div className="md:w-1/6  h-screen grid content-center ">
              <div className='place-self-center fixed md:block hidden' >
                <a href="https://www.linkedin.com/in/piyush-sakhare-4a8035129/" target="_blank">
                <img src="https://img.icons8.com/color/48/000000/linkedin-circled--v1.png"/>
                LinkedIn
                </a>
                <a className='my-2' href='https://twitter.com/piyushsakhare_?t=w4gCFaJV5yWrvcPN2OFE2A&s=08' target='_blank' >
                <img src="https://img.icons8.com/color/48/000000/twitter-circled--v1.png"/>
                Twitter
                </a>
                <a href='https://github.com/piyushsakhare' target="_blank">
                <img src="https://img.icons8.com/color/48/000000/github--v1.png"/>
                Github
                </a>
              </div>
            </div>
          <div className="md:w-4/6">
            <AnimatePresence exitBeforeEnter>
            <Routes >
              <Route path="/"  element={<About />} />
              <Route path='/work' element={<Work />} />
              <Route path='/contact' element={<Contact />} />
            </Routes>
            </AnimatePresence>
            </div>
          </div>
          </BrowserRouter>
    </div>
  );
}

export default App;
