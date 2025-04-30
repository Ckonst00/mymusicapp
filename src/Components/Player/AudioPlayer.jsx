import React from "react";
import {BsFillPlayCircleFill, BsFillPauseCircleFill, BsFillSkipStartCircleFill,
BsSkipEndCircleFill, BsFillSkipEndCircleFill} from "react-icons/bs";


const AudioPlayer= ({ songState, setSongState }) => {

    const PlayPause = () => {
        setSongState(!songState);
    }

    return (

            <div className='player-container'>
                <div className='title'>
                    <p>First Song</p>
                </div>
                <div className='navigation'>
                    <div className='navigation-wrapper'>
                        <div className='seek-bar' style={{width:'50%'}}></div>
                    </div>
                </div>

                <div className='controls'>
                    <BsFillSkipStartCircleFill className='button-action' />
                    <BsFillPlayCircleFill className='button-action-pp' onClick={PlayPause}/>
                    <BsFillSkipEndCircleFill className='button-action' />

                </div>
            </div>

    );
}

export default AudioPlayer;