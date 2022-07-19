import React, { useState, useEffect } from 'react'
import './App.css'
import slides from './film-data.json'

function App() {
  const [currentSlide, setCurrentSlide] = useState(slides[0])
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)

  // const n = () => {
  //   if (currentSlide !== slides.length){
  //       setCurrentSlide(currentSlide +1 )}
  // }
  //   if (currentSlide === slides.length){
  //       setCurrentSlide(1)
  //   }



  useEffect(()=>{
    setCurrentSlide(slides[currentSlideIndex])
    },[slides, currentSlideIndex])

  return(
    
    <div className="Slidesapp">
    <h1><strong>Animation Master Class</strong></h1>
    {/* <div> {slides.map((slide, idx) => (<SlidesComponent slide={slide} key={idx}/>))}</div> */}
    <SlidesComponent currentSlide={currentSlide}/>
        <p>
                <button onClick={() => {setCurrentSlideIndex(0)}}>Sart Over</button>
                <button onClick={() => {setCurrentSlideIndex(currentSlideIndex - 1)}}>Back</button>
                <button onClick={() => {setCurrentSlideIndex(currentSlideIndex + 1)}}>Next</button>
        </p>
    </div> 
  )
}


function SlidesComponent({currentSlide}) {
  return (
    <>
    <div className="eachSlide">
        <div className="img"><img alt="" img src={currentSlide.image} /> </div>  
        <div className='title'><strong>{currentSlide.title}</strong></div>
        <div className='original_title'><strong>{currentSlide.original_title}</strong></div>  
        <div className='release_date'>{currentSlide.release_date}</div>
        <br></br>
        <br></br>
        <div className='description'>{currentSlide.description}</div>
    </div>
    </>
)
}


export default App
