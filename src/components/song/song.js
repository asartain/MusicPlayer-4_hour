import classes from './song.module.css'
import React from 'react'


const Song = ({song, selected, onClick}) => {
    return(
        <div 
            className={`
                song 
                ${classes.song} 
                ${parseInt(selected) === song.id ? classes.selected : ''}
            `} 
            id={song.id} 
            onClick={onClick}
        >
            <div className={classes.title}>{song.title}</div>
            <div className={classes.artist}>{song.artist}</div>
        </div>
    )
}

export default Song