import React, { Component } from 'react'
import logo from '../assets/logo.png'
import './css/Header.css'
export default class Header extends Component {
    render() {
        return (
            <div>
                <header>
        <div className="container">
            <div id="brand">
            <img src = {logo } height="40rem" width="80rem" alt=""></img>
            {/* <img src = {logo } height="100rem" width="160rem" alt=""></img> */}
            </div>
            <nav>
                <ul>
               
                    <li><a href="#">Contact</a></li>
                   
                </ul>
            </nav>
        </div>
    </header>
            </div>
        )
    }
}
