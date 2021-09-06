import React, { useState, useEffect} from 'react'
import classes from './home.module.css'
import Fuse from 'fuse.js'
import SongData from '../../data/songData.json'

import Search from '../../components/search/search'
import Menu from '../../components/menu/menu'
import Controls from '../../components/controls/controls'
import InfoPanel from '../../components/infoPanel/infoPanel'



const Home = () => {   

    const [selectedSong, setSelectedSong] = useState(null)
    const [playing, setPlaying] = useState(false)
    const [playTimer, setPlayTimer] = useState(0)
    const [playInterval, setPlayInterval] = useState(null)
    const [query, setQuery] = useState('')
    const [filteredSongData, setFilteredSongData] = useState([])
    const [fuse, setFuse] = useState(null);


    useEffect(() => {
        setFuse(new Fuse(SongData, {
            keys: ['title', 'artist']
        }))
    },[])

    const songClick = (ev) => {
        const id = ev.target.closest('.song').id
        const song = filteredSongData.find(s => s.id === parseInt(id))
        setSelectedSong(song)
        // stop currently playing song
        clearInterval(playInterval)
        setPlayTimer(0)
    }

    const playPauseClick = () => setPlaying(!playing)

    const ffrwClick = (ev) => {
        const id = ev.target.closest('button').id;
        if(id === 'ff'){
            setPlayTimer(prevTime => {
                return prevTime+5 > selectedSong.length ? selectedSong.length : prevTime+5
            })
        }else{
            setPlayTimer(prevTime => {
                return prevTime-5 < 0 ? 0 : prevTime-5
            })
        }
    }

    useEffect(() => {
        //Mock timer for playing song
        if(playing){
            const pi = setInterval(() => {
                setPlayTimer(prevTime => {
                    if(prevTime >= selectedSong.length){
                        clearInterval(playInterval)
                        setPlaying(false)
                        return 0
                    }else{
                        return prevTime + 1
                    }
                })
            }, 1000)
            setPlayInterval(pi)
        }else{
            clearInterval(playInterval)
        }
        return () => {clearInterval(playInterval)}
    }, [playing, setPlayTimer, setPlayInterval, selectedSong]) 
    

    const userInput = (ev) => {
        setPlayTimer(parseInt(ev.target.value))
    }

    useEffect(() => {
        if(query !== ''){
            const searchResuts = fuse.search(query)
            setFilteredSongData(searchResuts.map(i => i.item))
        }else{
            setFilteredSongData(SongData)
        }
    }, [query, fuse, setFilteredSongData])

    return(
        <div className={classes.home}>
            <div className={classes.songs}>
                <Search query={query} setQuery={setQuery}></Search>
                <Menu songData={filteredSongData} selected={selectedSong?.id} songClick={songClick}></Menu>
            </div>
            <div className={classes.info}>
                <InfoPanel song={selectedSong}></InfoPanel>
            </div>
            <div className={classes.controls}>
                <Controls playing={playing} time={playTimer} length={selectedSong?.length} playPauseClick={playPauseClick} ffrwClick={ffrwClick} userInput={userInput}></Controls>
            </div>
        </div>
    )
}

export default Home