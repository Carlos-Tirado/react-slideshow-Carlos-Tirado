import React, { useState } from 'react'
import './App.css'
import movies from './film-data.json'



function App() {
  return(
    <>
    <div className="Slidesapp">
    <h1><strong>Animation Master Class</strong></h1>
    <div> {movies.map((movie, idx) => (<CarouselComponent movie={movie} key={idx}/>))}</div>
    </div>
    </>
  )
}

function CarouselComponent({movie}) {
  const [currentMovie, setCurrentMovie] = useState(0);
  return (
    
    
    <div className="eachMovie">
    
    
      <div className="img"><img alt="" img src={movie.image} /> </div>
      
    <div className='title'><strong>{movie.title}</strong></div>
    <div className='original_title'><strong>{movie.original_title}</strong></div>
      
    <div className='release_date'>{movie.release_date}</div>
    <br></br>
    <div className='description'>{movie.description}</div>
    </div>
    
)
}




export default App
