import React, { Component } from 'react'

import './css/Cards.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEthereum} from "@fortawesome/free-brands-svg-icons"
import {faPodcast,faFileCode,faHandsHelping} from "@fortawesome/free-solid-svg-icons"

export default class Cards extends Component {
    render() {
        return (
            <div>
                     <section className="section" >
  <h3>Getting Started</h3>
  <p className="section-lead">The web3.js library is a collection of modules that contain functionality for the ethereum ecosystem.</p>
  <div className="services-grid">
    <div className="service service1">
   <FontAwesomeIcon icon={faEthereum} className="faEthereum" size="5x" ></FontAwesomeIcon>
      {/* <i className="ti-bar-chart"></i> */}
      <h4>web3-eth</h4>
      <p className="section-lead"> Ethereum Blockchain and Smart Contracts.</p>
      {/* <a href="#" className="cta">Read More <span className="ti-angle-right"/></a> */}
    </div>

    <div className="service service2">
    <FontAwesomeIcon icon={faPodcast} className="faPodcast"  size="5x" ></FontAwesomeIcon>
      <h4>web3-shh</h4>
      <p className="section-lead"> Whisper Protocol, to Communicate P2P & Broadcast.</p>
      {/* <a href="#" className="cta">Read More <span className="ti-angle-right"/></a> */}
    </div>

    <div className="service service3">
    <FontAwesomeIcon icon={faFileCode} className="faFileCode" size="5x" ></FontAwesomeIcon>
      <h4>web3-bzz</h4>
      <p className="section-lead">The Swarm Protocol, The Decentralized File Storage.</p>
      {/* <a href="#" className="cta">Read more <span className="ti-angle-right"></span></a> */}
    </div>
      <div className="service service4">
      <FontAwesomeIcon icon={faHandsHelping} className="faHandsHelping"  size="5x" ></FontAwesomeIcon>
      <h4>web3-utils</h4>
      <p className="section-lead">Contains useful Helper functions for Dapp Developers.</p>
      {/* <a href="#" className="cta">Read more <span className="ti-angle-right"></span></a> */}
    </div>
  </div>
</section>






            </div>
        )
    }
}
