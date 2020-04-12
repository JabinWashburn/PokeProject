import React, {useEffect, useState} from 'react'
import axios from 'axios'


export function PokeCards(props){

    const[pokeImg, setPokeImg] = useState ('')

    useEffect(() =>{
        axios
        .get(`${props.card.url}`)
        .then(response => {
            // console.log(response.data.sprites)
            setPokeImg(response.data.sprites.front_default)
        })
        .catch(error => {
            console.log(`Jabin this is card error`, error)
        })
    }, [])

    return(
        <div className = 'container'>
        <div className = 'bigCard' key={props.index}>
            <img src = {`${pokeImg}`} alt='pokemon pic'/>
            <h2 className='card-name'>{props.card.name}</h2>
        </div>
        </div>
    )
}

export default PokeCards