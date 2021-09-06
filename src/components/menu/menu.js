import classes from './menu.module.css'
import React from 'react'

import Song from '../song/song'

const Menu = ({songData, selected, songClick}) => {
    return(
        <section className={classes.menu}>
            {songData.map(s => <Song key={s.id} song={s} selected={selected} onClick={songClick}></Song> )}
        </section>
    )
}

export default Menu