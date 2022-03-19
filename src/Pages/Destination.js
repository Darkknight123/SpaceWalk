import React from 'react'
import Navbar from '../Components/Navbar'
import background from '../assets/destination/background-destination-desktop.jpg'
import './Destination.css'
import Dest from '../assets/destination/image-moon.png'

function Destination() {
  return (
    <div style={{ backgroundImage: `url(${background})` }} className='nation'>
        <Navbar/>
        <div className='dest-land'>
            <div className='dest-image'>
                <h1>01 PICK YOUR DESTINATION</h1>
                <img src={Dest}/>
            </div>
        <div className='dest-desc'>
            <div className='dest-link'>
                <ul className='links'>
                    <li>MOON</li>
                    <li>MARS</li>
                    <li>EUROPA</li>
                    <li>TITAN</li>
                </ul>
            </div>
            <h1 className='dest-title'>MOON</h1>
            <span> See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</span>
            <div className='numbers'>
                <div className='avg-distance'>
                    <h3 className='avg-name'>AVG DISTANCE</h3>
                    <span className='avg-num'>384,400 KM</span>
                </div>
                    <div className='avg-time'>
                    <h3 className='avg-name'>EST. TRAVEL TIME</h3>
                    <span className='avg-num'>3 DAYS</span>
                </div>
            </div>
        </div>
        </div>
        
    </div>
  )
}

export default Destination