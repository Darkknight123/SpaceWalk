import { toBeRequired } from '@testing-library/jest-dom/dist/matchers'
import React from 'react'
import logo from '../assets/shared/logo.svg'
import './Navbar.css'

function Navbar() {
    return (
        <div className="nav-bar">
            <div className="right">
                <img src={logo} />
            </div>
            <div className="left">
                <ul className="nav-links">
                    <li><b>00</b>HOME</li>
                    <li><b>01</b>DESTINATION</li>
                    <li><b>02</b>CREW</li>
                    <li><b>03</b>TECHNOLOGY</li>

                </ul>
            </div>
        </div>
    )
}

export default Navbar



