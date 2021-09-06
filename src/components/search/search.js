import classes from './search.module.css'
import React from 'react'
import Name from '../name/name'

const Search = ({query, setQuery}) => {
    return(
        <div className={classes.searchContainer}>
            <Name />
            <input 
                className={classes.search} 
                type='text' 
                placeholder='Find a song' 
                value={query} 
                onChange={ev => setQuery(ev.target.value)}
            />
        </div>
    )
}

export default Search