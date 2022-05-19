import React from 'react'
import {NavLink, Link} from 'react-router-dom'
import useDarkMode from '../hooks/useDarkMode';

function Nav(){
    const [colorTheme,setTheme] = useDarkMode();
    return(
        <header id="head" class="bg-white dark:bg-gray-900 shadow fixed w-screen poppins fixed block h-auto shadow-lg">
        <div class="container mx-auto px-10 md:px-20 py-4">
            <div class="flex items-center justify-between">
                <div className='flex items-center'>
                    <Link className="flex items-center  light:text-gray-800 " to="/">
                        <h1 className='rounded-full dark:border-white border-gray-800 border-2 w-9 playfair p-1' >Pi.</h1>

                        <span className="mx-3 font-medium text-sm md:text-base hidden md:block">Piyush Sakhare</span>
                    </Link>
                    <button className='ml-2 md:ml-0' onClick={()=>setTheme(colorTheme)} >{colorTheme==="dark" ? <div className='flex items-center'><img width="36px" src="https://img.icons8.com/color/48/000000/sun-star.png"/><p className='hidden md:block'> too dark ?</p></div> : <div className='flex items-center'><img width="36px" src="https://img.icons8.com/color/48/000000/moon-satellite.png"/><p className='hidden md:block'> too bright ?</p></div>}</button>
                </div>
                <div className="flex items-center -mx-2">
                    <NavLink className= "flex items-center mx-2 light:text-gray-800 hover:bg-gray-800 hover:text-white dark:hover:bg-white dark:hover:text-black p-2"  to="/work" >
                        works
                    </NavLink>

                    <NavLink className="flex items-center mx-2 light:text-gray-800 hover:bg-gray-800 hover:text-white dark:hover:bg-white dark:hover:text-black p-2" to="/contact" >
                        contact
                    </NavLink>

                    <a className="flex items-center mx-2 light:text-gray-800 hover:bg-gray-800 hover:text-white dark:hover:bg-white dark:hover:text-black p-2" href="https://drive.google.com/file/d/1LjkNT0LvI7WccMXbh-EPbDelMd_nxCXl/view?usp=sharing" target="_blank">
                        resume
                    </a>
                </div>
            </div>
        </div>
    </header>
    )
}

export default Nav;