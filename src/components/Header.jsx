import React, { Component } from 'react'
import logo from '../assets/logo.png'
import './css/Header.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook,faGithub, faTwitter} from "@fortawesome/free-brands-svg-icons"

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
                <li><a href="https://github.com/ChainSafe/web3.js/blob/v1.3.4/docs/index.rst"><FontAwesomeIcon icon={faGithub} size="2x"></FontAwesomeIcon></a></li>
                <li><a href="https://twitter.com/web3_js?lang=en"><FontAwesomeIcon icon={faTwitter} size="2x"></FontAwesomeIcon></a></li>
                <li><a href="#"><FontAwesomeIcon icon={faFacebook} size="2x"></FontAwesomeIcon></a></li>
                <li><a href="#contact">Ask Query</a></li>
                   
                </ul>
            </nav>
        </div>
    </header>
            </div>
        )
    }
}
