import AudioPlayer from "./Components/Player/AudioPlayer.jsx";
import {useEffect, useRef, useState} from "react";
import {songsdata} from "./songs.js";


const App = () => {
    const [song, setSong] = useState(songsdata);
    const [songState, setSongState] = useState(false);
    const [currentSongs, setCurrentSong] = useState(songsdata[0]);

    const audioElement = useRef();
    useEffect(() => {
        if(songState) {
            audioElement.current.play();
        } else {
            audioElement.current.pause();
        }
    }, [songState]);

  return (
    <main className='min-h-screen flex flex-col bg-gradient-to-r from-slate-800 to-slate-950 text-white
    text-sm sm:text-base'>
      <div>
          <audio src="/SongsTemp/Entrance-of-the-Gladiators.mp3" ref={audioElement}/>
        <AudioPlayer songs={song} setSong={setSong} songState={songState} setSongState={setSongState}/>
      </div>
    </main>
  )
}

export default App
