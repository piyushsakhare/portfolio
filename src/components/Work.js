import React from 'react';
import {Link} from 'react-router-dom'
import publicapp from '../images/publicapp.png'
import firesys from '../images/firesys.jpg'
import srf from '../images/srf.jpg'
import {motion} from 'framer-motion'


function Work(){
    return(
      <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
        <div className='my-24 mx-8 md:mx-1'>
            <h2>Projects / Education</h2>
            <h1 className='playfair text-4xl text-gray-800 mt-6' >SR Foods</h1>
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
            <a href='http://srfgoldenbeans.com/' target="_blank" className='bg-gray-800 p-1 text-white ' >Website</a>
            </div>
            <div className='md:w-1/3'>
              <img src={srf} ></img>
            </div>
            </div>

            <h1 className='playfair text-4xl text-gray-800 mt-6' >Public Complaint Registration App</h1>
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
            <a href='https://github.com/piyushsakhare/PublicComplaintRegistration' target="_blank" className='bg-gray-800 p-1 text-white ' >Github</a>
            </div>
            <div className='md:w-1/3 '>
            <img  src={publicapp} ></img>
            </div>
            
            </div>

            <h1 className='playfair text-4xl text-gray-800 mt-6' >Fire Detection System</h1>
            <p>#YoloV3 #Python #MachineLearning</p><br></br>
            <div className='md:flex' >
            <div className='md:w-2/3 md:pr-4'>
            <p>Fire Detection system is implemented using AI and ML to prevent hazardous accidents in areas such as forests, urban districts, etc. It can use public cameras to detect Fires and alert the system with user-defined methods. This is my final year university project.</p>
            <p>What I did :</p>
            <li>Collect dataset and train the model for detecting fire</li>
            <li>Make presentations and reports about the project</li>
            <li>Contribute to publishing a paper regarding this project</li>
            <br></br>
            <a href='https://github.com/piyushsakhare' target="_blank" className='bg-gray-800 p-1 text-white ' >Github</a>
            </div>
            <div className='md:w-1/3'>
            <img  src={firesys} ></img>
            </div>
            
            </div>
            
            <div className=" mt-12">
    
          <h1 className=" md:text-3xl text-3xl playfair  mb-4 text-gray-800"> Education </h1>
  
          
      </div>

      <div className="">
        <div className="md:flex mx-6 md:mx-1">
          <div className="border-t-2 md:border-r-2 border-gray-800 p-4">
            <p className="poppins">2018-2022</p>
            <h1 className="playfair text-gray-800 text-xl">Bachelor of Computer Engineering</h1>
            <h2 className="poppins">Savitribai Phule Pune University</h2>
            <h2 className="poppins">Marathwada Mitra Mandal's Institute of Technology, Lohgaon Pune.</h2>
            <p className="poppins">9.08 SGPA</p>
          </div>
  
          <div className="border-t-2 md:border-r-2 border-gray-800 p-4">
            <p className="poppins">2016-2018</p>
            <h1 className="playfair text-gray-800 text-xl">HSC (Science) PCM-Electronics</h1>
            <h2 className="poppins">Maharashtra State Board</h2>
            <h2 className="poppins">Nowrosjee Wadia College, Pune.</h2>
            <p className="poppins">75.69%</p>
          </div>
  
          <div className="border-t-2 border-gray-800 p-4">
            <p className="poppins">2006-2016</p>
            <h1 className="playfair text-gray-800 text-xl">SSC</h1>
            <h2 className="poppins">Maharashtra State Board</h2>
            <h2 className="poppins">Stella Maris Highschool, Vadgaonsheri, Pune.</h2>
            <p className="poppins">90.80%</p>
          </div>
        </div>
       
      </div>

            
            <Link to='/' className='p-2 bg-gray-800 text-white mt-8 float-left' >&#x21E6; About</Link>
            <Link to='/contact' className='p-2 bg-gray-800 text-white mt-8 float-right' >Contact &#x21E8;</Link>
        </div>
        </motion.div>
    )
}

export default Work;