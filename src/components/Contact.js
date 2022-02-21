import React from 'react';
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom';

function Contact(){
 
    return(
        <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
        <div className='my-24 mx-8 md:mx-1'>
            <h1 className='playfair light:text-gray-800 text-4xl' >Say Hello !</h1><br>
            </br>
            <p>If you’d like to send me a message, I can be reached through various ways! If you prefer email, simply fill out the form below or send me a message directly at <a className='underline font-semibold' href="mailto:piyushsakhare713@gmail.com"> piyushsakhare713@gmail.com</a></p>
            <div className='md:flex mt-6' >
                <div className='md:w-1/2'>
                <form action="https://formspree.io/f/mjvlwgdj" method="POST">
                <label className='text-lg' for="name">Name : </label><br></br>
                <input type="name" id="name" name="name" className='appearance-none border-2 border-gray-800 w-full '></input>
                <br></br><br></br>
                <label className='text-lg' for="email">Email : </label><br></br>
                <input type="email" id="email" name="email" className='appearance-none border-2 border-gray-800 w-full '></input>
                <br></br><br></br>
                <label className='text-lg' for="message">Message : </label><br></br>
                <textarea name='message' rows='6' className='appearance-none border-2 border-gray-800 w-full'></textarea>
                <br></br><br></br>
                <button className='float-right p-2 dark:bg-white dark:text-black dark:font-semibold bg-gray-800 text-white' type="submit" >Send Message</button>
                </form>
                
                </div>
                
                <div className='md:w-1/2'>

                </div>
                <div className='place-self-center block md:hidden' >
                <div>
                <img src="https://img.icons8.com/color/48/000000/linkedin-circled--v1.png"/>
                LinkedIn
                </div>
                <div className='my-2' >
                <img src="https://img.icons8.com/color/48/000000/twitter-circled--v1.png"/>
                Twitter
                </div>
                <div>
                <img src="https://img.icons8.com/color/48/000000/github--v1.png"/>
                Github
                </div>
              </div>
              </div>
              <Link className='float-left md:my-10 dark:bg-white dark:text-black bg-gray-800 dark:font-semibold p-2 text-white' to="/work">&#x21E6; Work </Link>
            
        </div>
        </motion.div>
    )
}

export default Contact;