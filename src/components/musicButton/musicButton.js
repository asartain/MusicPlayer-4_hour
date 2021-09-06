import classes from './musicButton.module.css'
import React from 'react'

import { FaPlay, FaPause, FaFastForward } from "react-icons/fa";

const MusicButton = ({id, controlType, onClick}) => {

    let icon;
    switch(controlType){
        case 'play':
            icon = <FaPlay></FaPlay>
            break;
        case 'pause':
            icon = <FaPause></FaPause>
            break;
        case 'ff':
            icon = <FaFastForward></FaFastForward>
            break;
        case 'rw':
            icon = <FaFastForward></FaFastForward>
            break;
        default:
            icon = <FaPlay></FaPlay>
    }

    return(
        <button 
            className={`
                ${classes.button} 
                ${controlType === 'rw' ? classes.rewind : null}
            `} 
            type='button'
            onClick={onClick}
            id={id}
        >
            {icon}
        </button>
    )
}

export default MusicButton