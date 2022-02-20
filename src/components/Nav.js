import React from 'react'
import {NavLink, Link} from 'react-router-dom'
import useDarkMode from '../hooks/useDarkMode';

function Nav(){
    const [colorTheme,setTheme] = useDarkMode();
    return(
        <header id="head" class="bg-white shadow fixed w-screen poppins fixed block h-auto shadow-lg">
        <div class="container mx-auto px-20 py-4">
            <div class="flex items-center justify-between">
                <div className='flex items-center'>
                    <Link className="flex items-center text-gray-800 " to="/">
                        <h1 className='rounded-full border-gray-800 border-2 w-9 playfair p-1' >Pi.</h1>

                        <span className="mx-3 font-medium text-sm md:text-base hidden md:block">Piyush Sakhare</span>
                    </Link>
                </div>
                <div className="flex items-center -mx-2">
                    <NavLink className= "flex items-center mx-2 text-gray-800 hover:bg-gray-800 hover:text-white p-2"  to="/work" >
                        works
                    </NavLink>

                    <NavLink className="flex items-center mx-2 text-gray-800 hover:bg-gray-800 hover:text-white p-2" to="/contact" >
                        contact
                    </NavLink>

                    <a className="flex items-center mx-2 text-gray-800 hover:bg-gray-800 hover:text-white p-2" href="https://drive.google.com/file/d/1pNwb8wDYxP-dtB_LnzUum23CDsXFC9Of/view?usp=sharing" target="_blank">
                        resume
                    </a>
                </div>
            </div>
        </div>
    </header>
    )
}

export default Nav;