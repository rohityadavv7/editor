import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa6";
import {motion} from "framer-motion"


export default function Navbar() {
  return (
    <motion.div initial={{y:-800}} animate={{y:0}} transition={{duration:0.8, delay:0.6,type:"spring" ,stiffness:70}}
    className='flex justify-evenly mx-auto w-11/12 mb-6 shadow-black rounded-3xl shadow-2xl'>
        <div className='flex justify-evenly mx-auto mt-4 mb-6  w-full'>
            <NavLink to="/">
                <h1 className='text-[35px] font-normal font-semibold p-2  '>Ezzy-Audio</h1>
            </NavLink>

            <NavLink to="/editor">
                <button className='px-8 py-2 shadow-md border border-black hover:scale-105 transition-all duration-200
                 shadow-orange flex gap-4 items-center text-xl font-normal ease-in-out hover:bg-orange
                  bg-highlight text-black rounded-xl font-semibold'>
                    <p>Get Started </p>
                    <FaArrowRight />
                </button>
            </NavLink>
        </div>
    </motion.div>
  )
}
