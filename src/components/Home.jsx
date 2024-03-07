import React from 'react'
import img1 from "../assets/images/imgmain.jpg"
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import {easeInOut, motion} from "framer-motion"
import { NavLink } from 'react-router-dom';

export default function Home() {
  return (
    <div className=' w-11/12 flex mx-auto flex-col'>
         {/* <motion.div initial={{x:1800}} animate={{x:0}} transition={{type:"spring", delay:1.5, duration:0.5, stiffness:100}}
            className='bg-black font-heading1 text-white text-[90px] w-full px-[48px] rounded-r-full rounded-l-full'>
                <motion.p className='flex gap-4 '
                initial={{x:1800}} animate={{x:0}} transition={{duration:5, delay:2, ease:"easeIn",
                }}>
                <p className='w-full'>Your Music, Your Way ! </p>
                </motion.p>
            </motion.div> */}

       <div className='flex gap-4 space-y-8 flex-wrap font-normal justify-around mt-6'>
        <motion.div initial={{x:-900}} animate={{x:0}} transition={{duration:0.8, delay:1, type:"spring", stiffness:70}}
        className='flex flex-col  space-y-8 items- justify-center'>
            <h1 className='text-[40px]  font-semibold'>
                <span className='text-[90px] font-bold text-database text-[#A51206]'>
                    Welcome
                </span> to your one stop <br/>for all your music edits
            </h1>

            <NavLink to="/editor">
                <motion.button 
                className='bg-white px-10 flex animate-bounce gap-4 items-center 
                py-4 rounded-2xl text-2xl font-normal group font-semibold hover:bg-highlight transition-all duration-200'>
                    
                    Explore our Audio-Editor Now
                    <FaRegArrowAltCircleRight className='group-hover:text-white transition-all duration-200 text-3xl text-orange' />
                
                </motion.button>
            </NavLink>
        </motion.div>
        <motion.div initial={{x:800}} animate={{x:0}} transition={{duration:0.6, delay:1.1, type:"spring", stiffness:70}}>
            <img 
            src={img1} height={400} width={400} className='rounded-full anima transition-all duration-350 shadow-2xl shadow-black'/>
        </motion.div>
       </div>
    </div>
  )
}
