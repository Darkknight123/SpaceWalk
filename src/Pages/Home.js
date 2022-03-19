import React from 'react'
import Navbar from '../Components/Navbar'
import './Home.css'
import background from '../assets/home/background-home-desktop.jpg'

function Home() {
  return (
    <div style={{ backgroundImage: `url(${background})` }}>  <Navbar/></div>
  
  )
}

export default Home