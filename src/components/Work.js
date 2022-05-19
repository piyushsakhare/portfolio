import React from 'react';
import {Link} from 'react-router-dom'
import publicapp from '../images/publicapp.png'
import firesys from '../images/firesys.jpg'
import pokemon from '../images/pokemon.jpeg'
import pretiosa from '../images/pretiosa.png'
import srf from '../images/srf.jpg'
import {motion} from 'framer-motion'


function Work(){
    return(
      <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
        <div className='my-24 mx-8 md:mx-1'>
            <h2>Projects / Education</h2>

            <h1 className='playfair text-4xl light:text-gray-800 mt-6' >Pokemon Cards Value</h1>
            <p>#React #tailwindCSS #RESTAPIs</p><br></br>
            <div className='md:flex' >
            <div className='md:w-2/3 md:pr-4'>
            <p>A Web application on which users can search pokemon, get the stats and images related to it along with their valuable trading cards. A personal project because i was into Pokemon and trading cards price had skyrocketted</p>
            <p>What I did :</p>
            <ul className='list-disc ml-5'>
            <li>Design the application and implement dark mode.</li>
            <li>Use APIs to feteh data related to Pokemon and their cards.</li>
            <li>Used PokeAPI and PokemonTCGAPI</li>
            <li>Made it responsive and user friendly deployed on Netlify</li>
            </ul>
            <br></br>
            <a href='https://pokecardsvalue.netlify.app/' target="_blank" className='bg-gray-800 p-1 text-white dark:bg-white dark:text-black dark:font-semibold' >Website</a>
            </div>
            <div className='md:w-1/3 '>
            <img  src={pokemon} ></img>
            </div>
            </div>

            <h1 className='playfair text-4xl light:text-gray-800 mt-6' >Pretiosa Viventium</h1>
            <p>#React #tailwindCSS #MongoDB #epressJS #Nodejs</p><br></br>
            <div className='md:flex' >
            <div className='md:w-2/3 md:pr-4'>
            <p>A Web application on which users can sigup or login and search for places to stay for their holidays. Made this Full stack Web application using MongoDB, expressJS, ReactJS and NodeJS (MERN). Users can create account, search for locations and book their stay.</p>
            <p>What I did :</p>
            <ul className='list-disc ml-5'>
            <li>Create API using express and node with MongoDB Atlas for storage.</li>
            <li>Used Firebase to store images.</li>
            <li>Make it responsive and user friendly deployed on Netlify</li>
            </ul>
            <br></br>
            <a href='https://pretiosaviventium.netlify.app/' target="_blank" className='bg-gray-800 p-1 text-white dark:bg-white dark:text-black dark:font-semibold' >Website</a>
            </div>
            <div className='md:w-1/3 '>
            <img  src={pretiosa} ></img>
            </div>
            </div>

            <h1 className='playfair text-4xl light:text-gray-800 mt-6' >SR Foods</h1>
            <p>#React #tailwind #UI/UX #Figma</p><br></br>
            <div className='md:flex' >
            <div className='md:w-2/3 md:pr-4'>
            <p>SR Foods is a local business that mainly focuses on selling soy-based products rich in protein for consumers. This project was made to make the business go online and was built using React, tailwind CSS, and React libraries.</p>
            <p>What I did :</p>
            <ul className='list-disc ml-5'>
            <li>In a team of three, planned and designed the website.</li>
            <li>Built a responsive website using ReactJS and tailwind CSS.</li>
            <li>Involved in designing the product with Figma and writing content for the page.</li>
            <li>Helped in hosting the website online.</li>
            </ul>
            <br></br>
            <a href='http://srfgoldenbeans.com/' target="_blank" className='bg-gray-800 p-1 text-white dark:bg-white dark:text-black dark:font-semibold' >Website</a>
            </div>
            <div className='md:w-1/3'>
              <img src={srf} ></img>
            </div>
            </div>

            <h1 className='playfair text-4xl light:text-gray-800 mt-6' >Public Complaint Registration App</h1>
            <p>#Java #Firebase #Android</p><br></br>
            <div className='md:flex' >
            <div className='md:w-2/3 md:pr-4'>
            <p>This was my university mini-project. The idea behind it is to make it easier for people to register a complaint to their local municipality using an app. It takes images and the live location of the user for registering complaints and uses Firebase as a Database.</p>
            <p>What I did :</p>
            <ul className='list-disc ml-5'>
            <li>Design the workflow of the application using Figma.</li>
            <li>Implement the front-end with reference to the design in XML.</li>
            <li>Connect Firebase to the application.</li>
            <li>Build the functions related to it in a group of three.</li>
            </ul>
            <br></br>
            <a href='https://github.com/piyushsakhare/PublicComplaintRegistration' target="_blank" className='bg-gray-800 p-1 text-white dark:bg-white dark:text-black dark:font-semibold' >Github</a>
            </div>
            <div className='md:w-1/3 '>
            <img  src={publicapp} ></img>
            </div>
            </div>

            <h1 className='playfair text-4xl light:text-gray-800 mt-6' >Fire Detection System</h1>
            <p>#YoloV3 #Python #MachineLearning</p><br></br>
            <div className='md:flex' >
            <div className='md:w-2/3 md:pr-4'>
            <p>Fire Detection system is implemented using AI and ML to prevent hazardous accidents in areas such as forests, urban districts, etc. It can use public cameras to detect Fires and alert the system with user-defined methods. This is my final year university project.</p>
            <p>What I did :</p>
            <li>Collect dataset and train the model for detecting fire</li>
            <li>Make presentations and reports about the project</li>
            <li>Contribute to publishing a paper regarding this project</li>
            <br></br>
            <a href='https://github.com/piyushsakhare' target="_blank" className='bg-gray-800 p-1 text-white dark:bg-white dark:text-black dark:font-semibold' >Github</a>
            </div>
            <div className='md:w-1/3'>
            <img  src={firesys} ></img>
            </div>
            
            </div>
            
            <div className=" mt-12">
    
          <h1 className=" md:text-3xl text-3xl playfair  mb-4 light:text-gray-800"> Education </h1>
  
          
      </div>

      <div className="">
        <div className="md:flex mx-6 md:mx-1">
          <div className="border-t-2 md:border-r-2 dark:border-white border-gray-800 p-4">
            <p className="poppins">2018-2022</p>
            <h1 className="playfair light:text-gray-800 text-xl">Bachelor of Computer Engineering</h1>
            <h2 className="poppins">Savitribai Phule Pune University</h2>
            <h2 className="poppins">Marathwada Mitra Mandal's Institute of Technology, Lohgaon Pune.</h2>
            <p className="poppins">9.08 SGPA</p>
          </div>
  
          <div className="border-t-2 md:border-r-2 dark:border-white border-gray-800 p-4">
            <p className="poppins">2016-2018</p>
            <h1 className="playfair light:text-gray-800 text-xl">HSC (Science) PCM-Electronics</h1>
            <h2 className="poppins">Maharashtra State Board</h2>
            <h2 className="poppins">Nowrosjee Wadia College, Pune.</h2>
            <p className="poppins">75.69%</p>
          </div>
  
          <div className="border-t-2 dark:border-white border-gray-800 p-4">
            <p className="poppins">2006-2016</p>
            <h1 className="playfair light:text-gray-800 text-xl">SSC</h1>
            <h2 className="poppins">Maharashtra State Board</h2>
            <h2 className="poppins">Stella Maris Highschool, Vadgaonsheri, Pune.</h2>
            <p className="poppins">90.80%</p>
          </div>
        </div>
       
      </div>

            
            <Link to='/' className='p-2 dark:bg-white dark:text-black bg-gray-800 text-white mt-8 float-left dark:font-semibold' >&#x21E6; About</Link>
            <Link to='/contact' className='p-2 dark:bg-white dark:text-black bg-gray-800 text-white mt-8 float-right dark:font-semibold' >Contact &#x21E8;</Link>
        </div>
        </motion.div>
    )
}

export default Work;