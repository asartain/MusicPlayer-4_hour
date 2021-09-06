import classes from './controls.module.css'
import React from 'react'

import MusicButton from '../musicButton/musicButton'

const Controls = ({playing, time, length, playPauseClick, ffrwClick, userInput}) => {
    return(
        <div className={classes.ControlContainer}>
            <div className={classes.buttons}>
                <MusicButton id='rw' controlType='rw' onClick={ffrwClick}></MusicButton>
                {playing ? 
                    <MusicButton id='pause' controlType='pause' onClick={playPauseClick}></MusicButton>:
                    <MusicButton id='play' controlType='play' onClick={playPauseClick}></MusicButton>
                }
                <MusicButton id='ff' controlType='ff' onClick={ffrwClick}></MusicButton>
            </div>
            <div className={classes.time}>
                <input type="range" id="timer" name="timer" step="1" min="0" max={length} value={time} onChange={userInput}/>
                <div className={classes.remaining}>{`Time ${time}s / ${length}s`}</div>
            </div>
        </div>
    )
}

export default Controls