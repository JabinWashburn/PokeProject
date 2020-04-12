import React, {useState, useEffect} from 'react'
import axios from 'axios'
import PokeCard from './components/PokeCard'
import './App.css'



export default function App (){
  
  const [pokeCards, setPokeCards] = useState ([])

  
  useEffect(() => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon?offset=20&limit=964')
      .then(response => {
        console.log(response.data.results)
        setPokeCards(response.data.results)
      })
      .catch(error => {
        console.log(error)
      })
    // don't forget your dependency array
  }, [])

    return(
      <>
      <h1>PokePriceTCG</h1>
      <div className = 'App'>
        {pokeCards.map((item, index) =>{
          return<PokeCard card={item} index={index}/>
        })}
      </div>
      </>
    )
}