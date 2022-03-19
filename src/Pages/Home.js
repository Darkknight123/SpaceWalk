import React from 'react'
import Navbar from '../Components/Navbar'
import './Home.css'
import background from '../assets/home/background-home-desktop.jpg'

function Home() {
  return (
    <div style={{ backgroundImage: `url(${background})` }} className='home'>
       <Navbar/>
       <div className='landing'>
         <div className='left-landing'>
           <h1 className='travel'>SO, YOU WANT TO TRAVEL TO </h1>
           <h1 className='space'><b>SPACE</b></h1>
           <p className='lets'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
         </div>
         <div className='right-landing'>
           <button className='explore'>EXPLORE</button>
         </div>
       </div>
       </div>
  
  )
}

export default Home