import {  createContext, useRef, useState } from "react";

const AudioContext = createContext();

const ContextProvider = ({children}) => {
    const[tracks, setTracks] = useState([]);
    const[isPlaying, setIsPlaying] = useState(false);
    const[currentTrack, setCurrentTrack] = useState("");

     const  handleClick=(indexToRemove)=>{
        console.log("index value",indexToRemove)
        console.log("in handle")
        // const newTracks = tracks.filter((index) => index !== indexToFilter)
        tracks.splice(indexToRemove, 1); 
        // console.log("new", newTracks);
        setTracks([...tracks])
        console.log(tracks);
    }

    const handleChange = (e) => {
        const files = e.target.files[0];
        console.log("file received",files);

        if(!files){
            return;
        }

        const fileUrl = URL.createObjectURL(files);

        console.log("printing url",fileUrl)

        setCurrentTrack(fileUrl);
        setTracks([fileUrl])

        console.log("printing current track",currentTrack);
    }

    return(
        <AudioContext.Provider value={{
            tracks, setTracks, isPlaying,currentTrack, setCurrentTrack, handleChange, handleClick
        }} >
            {children}
        </AudioContext.Provider>
    )
}

export {ContextProvider, AudioContext};