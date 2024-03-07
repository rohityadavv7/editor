import React, { useContext, useEffect } from 'react'
import { AudioContext } from '../context/context';
import { MdOutlineCancel } from "react-icons/md";


export default function EditorWindow() {
    const {tracks,setTracks, controlRef, handleClick} = useContext(AudioContext);
     
   
  return (
    <div className='bg-white w-11/12 mx-auto flex flex-col rounded-3xl mt-8 p-6'>
        {
            tracks.length === 0 ? (
                <div className='font-normal font-semibold text-xl'>
                    No Tracks Added Yet
                </div>
            )
            :
            (
                <div className='flex flex-col space-y-4 p-4'>
                    {
                        tracks.map((track,index) => {
                            return(
                                <div key={index} className='flex bg-richblack-10 p-4 rounded-3xl gap-4 items-center'>
                                    <p className='text-xl font-normal text-white'>{index}</p>
                                    <audio key={index} src={track} controls ref={controlRef}/>
                                    <MdOutlineCancel className='text-3xl hover:cursor text-highlight'
                                    onClick={() => {
                                        console.log(index)
                                        handleClick(index)
                                    } } />
                                </div>
                            )
                        })
                    }
                </div>
            )
        }
    </div>
  )
}
