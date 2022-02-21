import React from 'react';
import {Link} from 'react-router-dom'
import profile from '../images/profile.jpg'
import {motion} from 'framer-motion'


function About(){
    
    return(
        <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
        <div className='my-24 mx-8 md:mx-1 '>
        <div class=" container md:pl-16 md:px-6 flex justify-between">
        <div class="md:w-3/4 ">
            <h1 class="playfair text-5xl pb-4 dark:text-white text-gray-800" >Hi there, I'm Piyush!</h1>
            <p class="poppins text-lg">I’m a front-end developer who loves building user-friendly websites and web apps, enjoys writing documentation and loves helping people learn how to code. I also really like drawing with CSS. Most recently, I’ve been building web apps with React and serverless providers like Firebase and Netlify.</p>
        </div>
        <img src={profile} class=" w-40 hidden md:block border-2 dark:border-white border-gray-800 rounded-full h-40" alt=""></img>
    </div>
    <div className='mt-16 md:pl-16 px-6 playfair text-3xl dark:text-white text-gray-800' >
        <h1>My skillset</h1>
    </div>
    <div className='mt-8 md:pl-16 px-6 flex mx-8' >
        <div className='w-1/4 flex' >
        <img src="https://img.icons8.com/color/48/000000/html-5--v1.png"/>
        <p className='ml-2 md:block hidden'>HTML CSS</p>
        </div>
        <div className='w-1/4 flex' >
        <img src="https://img.icons8.com/color/48/000000/javascript--v1.png"/>
        <p className='ml-2 md:block hidden'>Javascript</p>
        </div>
        <div className='w-1/4 flex' >
        <img src="https://img.icons8.com/color/48/000000/react-native.png"/>
        <p className='ml-2 md:block hidden'>React</p>
        </div>
        <div className='w-1/4 flex' >
        <img src="https://img.icons8.com/color/48/000000/nodejs.png"/>
        <p className='ml-2 md:block hidden'>NodeJS</p>
        </div>
    </div>
    <div className='mt-8 md:pl-16'>
        #tailwindCSS #Bootstrap #Java #SQL/DBMS
    </div>
    <Link to="/work" className='mt-8 dark:bg-white dark:text-black dark:font-semibold bg-gray-800 text-white p-2 float-right'>
        <h1>Work &#x21E8;</h1>
    </Link>
    </div>
    </motion.div>
    )
}

export default About;