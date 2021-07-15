import React, { Component } from 'react'
import './css/What.css'
export default class What extends Component {
    render() {
        return (
            <div>
                

           <div className="icontainer">
		
		<div className="webpage-content">
       			<section className="section1" id="about-me">
				<div className="about-content">
					<h2 className="header">What is Web3 ?</h2>
					<p>web3. js is a collection of libraries which allow you to interact with a local or remote ethereum node, using a HTTP or IPC connection. The web3 JavaScript library interacts with the Ethereum blockchain. It can retrieve user accounts, send transactions, interact with smart contracts, and more.</p>
					{/* <iframe src="https://youtu.be/cZZMDOrIo2k" title="abc" ></iframe> */}
                    <div>
                    <iframe  src="https://www.youtube.com/embed/cZZMDOrIo2k" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div></div>
                {/* width="560" height="315" */}
			</section>
          
			</div>
	</div>
            </div>
        )
    }
}
