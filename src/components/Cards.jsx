import React, { Component } from 'react'

import './css/Cards.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEthereum,} from "@fortawesome/free-brands-svg-icons"
import {faPodcast,faFileCode,faHandsHelping} from "@fortawesome/free-solid-svg-icons"

export default class Cards extends Component {
    render() {
        return (
            <div>
                     <section >
  <h3>Getting Started</h3>
  <p class="section-lead">The web3.js library is a collection of modules that contain functionality for the ethereum ecosystem.</p>
  <div class="services-grid">
    <div class="service service1">
   <FontAwesomeIcon icon={faEthereum}  size="5x" ></FontAwesomeIcon>
      {/* <i class="ti-bar-chart"></i> */}
      <h4>web3-eth</h4>
      <p class="section-lead"> for the ethereum blockchain and smart contracts.</p>
      {/* <a href="#" class="cta">Read More <span class="ti-angle-right"/></a> */}
    </div>

    <div class="service service2">
    <FontAwesomeIcon icon={faPodcast}  size="5x" ></FontAwesomeIcon>
      <h4>web3-shh</h4>
      <p class="section-lead">  the whisper protocol, to communicate p2p & broadcast.</p>
      {/* <a href="#" class="cta">Read More <span class="ti-angle-right"/></a> */}
    </div>

    <div class="service service3">
    <FontAwesomeIcon icon={faFileCode}  size="5x" ></FontAwesomeIcon>
      <h4>web3-bzz</h4>
      <p class="section-lead"> the swarm protocol, the decentralized file storage.</p>
      {/* <a href="#" class="cta">Read more <span class="ti-angle-right"></span></a> */}
    </div>
      <div class="service service4">
      <FontAwesomeIcon icon={faHandsHelping}  size="5x" ></FontAwesomeIcon>
      <h4>web3-utils</h4>
      <p class="section-lead">contains useful helper functions for Dapp developers.</p>
      {/* <a href="#" class="cta">Read more <span class="ti-angle-right"></span></a> */}
    </div>
  </div>
</section>






            </div>
        )
    }
}
