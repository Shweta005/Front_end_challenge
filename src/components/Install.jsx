import React, { Component } from 'react'
import './css/Install.css'
export default class Install extends Component {
    render() {
        return (
            <div>
                <div className="cccontainer">
                    <center><h3 className="heading">Start Your Project With Web3.js...</h3></center>
                    <center><p className="heading" >This can be done using the following methods:</p></center><br/>
                  <div className="row">
    <div className="col-md-4">
      <div className="card card-1">
        <h3>npm</h3>
        <p><b>$ npm install web3</b></p>
      </div>
    </div>
    <div className="col-md-4">
      <div className="card card-2">
        <h3>yarn</h3>
        <p><b>$ yarn add web3</b></p>
      </div>
    </div>
    <div className="col-md-4">
      <div className="card card-3">
        <h3>Pure Js</h3>
        <p> Link  the <b>dist/web3.min.js</b></p>
      </div>
    </div>
  </div>

</div>
 
            </div>
        )
    }
}
