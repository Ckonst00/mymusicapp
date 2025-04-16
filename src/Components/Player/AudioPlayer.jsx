import React from "react";

function AudioPlayer() {


    return (
        <figure className=" flex flex-col items-center justify-center h-screen space-y-4">
            <figcaption className="text-lg font-semibold">Click Play to listen:</figcaption>
            <audio controls src="src/SongsTemp/Entrance-of the-Gladiators.mp3"></audio>
        </figure>

    )
}
export default AudioPlayer;