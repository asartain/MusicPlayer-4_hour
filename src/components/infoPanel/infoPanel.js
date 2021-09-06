import classes from './infoPanel.module.css'
import React from 'react'

const infoPanel = ({song}) => {
    if(song){
        return(
            <section className={classes.info}>
                <div className={classes.image}>
                    <img 
                        src={song.base64Img} 
                        alt={song.title} 
                    />
                </div>
                <div className={classes.data}>
                    <div className={classes.title}>{song.title}</div>    
                    <div className={classes.artist}>{song.artist}</div>    
                </div>
                <div className={classes.lyrics}>
                    <div className={classes.lyricsTitle}>Lyrics</div>
                    {song.lyrics}
                </div>
            </section>
        )
    }else{
        return(
            <section className={classes.noInfo}>
                <div>Please Select a Song</div>
            </section>
        )
    }
}

export default infoPanel