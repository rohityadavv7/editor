import React, { useContext } from 'react'
import Aud1 from "../assets/audio1.mp3"
import Aud2 from "../assets/audio2.mp3"
import Aud3 from "../assets/audio3.mp3"
import { AudioContext } from '../context/context'
import { MdOutlineLibraryAdd } from "react-icons/md";
import {motion} from "framer-motion"

export default function SampleAudio() {
    const {tracks, setTracks, handleChange} = useContext(AudioContext);
  return (
    <div className='w-11/12 mx-auto flex flex-col mt-8  gap-4'>
        
        <h1 className='text-3xl font-normal font-semibold'>Sample Audio's</h1>
        
        <div className='flex mt-4 gap-4 flex-wrap'>
            
            <motion.div initial={{opacity:0, scale:0}} animate={{opacity:1, scale:1}}
             transition={{duration:0.6, delay:0.4, type:"spring", stiffness:70}}
            className='flex items-center justify-center font-normal font-semibold gap-4
            border shadow-orange shadow-md cursor-pointer
             bg-highlight rounded-full px-6 py-4' 
            onClick={(e)=>{
                setTracks([...tracks,Aud1])
                console.log(tracks)
            }}>
                <p className='text-xl font-normal'>
                    Audio1
                </p>
                <MdOutlineLibraryAdd  className='text-white text-2xl'/>
                <audio src={Aud1}></audio>
            </motion.div>
            
            <motion.div initial={{opacity:0, scale:0}} animate={{opacity:1, scale:1}}
             transition={{duration:0.6, delay:0.6, type:"spring", stiffness:70}}
            className='flex items-center justify-center font-normal font-semibold 
            border shadow-orange shadow-md cursor-pointer gap-4 
             bg-highlight rounded-full px-6 py-4' 
              onClick={() =>  {
                setTracks([...tracks,Aud2])
                console.log(tracks)
            }}>
                <p className='text-xl font-normal'>Audio2</p>
                <MdOutlineLibraryAdd  className='text-white text-2xl'/>
                <audio  src={Aud2}></audio>
            </motion.div>
            
            <motion.div initial={{opacity:0, scale:0}} animate={{opacity:1, scale:1}}
             transition={{duration:0.6, delay:0.8, type:"spring", stiffness:70}}
            className='flex items-center justify-center font-normal font-semibold gap-4
            border shadow-orange shadow-md cursor-pointer
             bg-highlight rounded-full px-6 py-4' 
              onClick={() =>  {
                setTracks([...tracks,Aud3])
                console.log(tracks)
            }}>
                <p className='text-xl font-normal'>Audio3</p>
                <MdOutlineLibraryAdd className='text-2xl text-white'/>
                <audio src={Aud3}>

                </audio>
            </motion.div>
        </div>

        <div className='flex flex-col  mt-4 items-start space-y-3'>
            <button className='text-2xl font-normal font-semibold text-[#A51206]'> 
                Import your own audio?
            </button>

            <label htmlFor="upload" className='font-normal font-semibold text-xl hover:cursor-pointer
             bg-blue-50 px-8 py-2 rounded-lg hover:bg-blue-100 transition-all duration-200 hover:shadow-lg hover:shadow-black'> 
             Upload now</label>
            <input type='file' id='upload' className='rounded-lg p-2 hidden border font-normal' onChange={(e) => handleChange(e)}/>
        </div>

    </div>
  )
}
