import React from "react";

function AudioPlayer() {


    return (
        <figure className=" flex flex-col items-center justify-end h-screen space-y-4">
            <figcaption className="text-xl font-semibold text-orange-400">Click Play to listen</figcaption>
            <audio controls src="src/SongsTemp/Entrance-of the-Gladiators.mp3"></audio>
            <button type="button" className="w-12 h-12 rounded-full bg-orange-400 text-white shadow-lg hover:bg-orange-500 transition">
                Play
            </button>
        </figure>

    )
}
export default AudioPlayer;