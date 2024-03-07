import React, { useContext } from 'react'
import { FaRegPlayCircle } from "react-icons/fa";
import { FaRegCirclePause } from "react-icons/fa6";
import { AudioContext } from '../context/context';

export default function Controls() {
    const{isPlaying, PlayPause} = useContext(AudioContext)
  return (
    <div>
        {
            isPlaying ? (
                <div>
                    <p>Pause</p>
                    <FaRegCirclePause  onClick={() => PlayPause()}/>
                </div>
            )
            :
            (<div>
                <p>Play</p>
                <FaRegPlayCircle  onClick={() => PlayPause()}/>
            </div>)
        }
    </div>
  )
}
