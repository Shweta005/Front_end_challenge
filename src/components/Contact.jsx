
import React, {  useState } from 'react'
import Web3 from 'web3';
import {contactAbi} from '../abi/abi';
import './css/Contact.css'

const web3 = new Web3(Web3.givenProvider);
const contractAddr = '0x82A6C311e501dCab5e11bed4e0D5e08058AD5Ab3';
//const contractAddr = '0x90B50b1305708a076a4141B99A3577f8e4A1D152';
const Contactcontract = new web3.eth.Contract(contactAbi, contractAddr);


function Contact() {
  const [[name,mail,msg], setData] = useState("");
// const [data ,setData] = useState();

 const handleSet = async (e) => {
  e.preventDefault();
  const accounts = await window.ethereum.enable();
  const account = accounts[0];
 // const gas = await Contactcontract.methods.setData(data).estimateGas();
  //const result = await Contactcontract.methods.setData(data).send({ from: account, gas });
 const gas = await Contactcontract.methods.setData(name,mail,msg).estimateGas();
 const result = await Contactcontract.methods.setData(name,mail,msg).send({ from: account, gas });
  console.log(result);
}

 const handleGet = async (e) => {
   e.preventDefault();
   const result = await Contactcontract.methods.getData().call();
  // setGetNumber(result);
   console.log(result);
 }

        return (
            <div>
              <section id="contact">
               <div className="body">
               <div className="ccontainer">
         <form onSubmit={handleSet} >
    <ul className="flex-outer">
      <center><h2 className="h2">Have Any Query ?</h2></center>
      <li>
        <label htmlFor="first-name">Name</label>
        <input type="text" id="first-name" placeholder="Enter your Name here" value={name} onSubmit={ e => setData(e.target.value) } required/>
      </li>
      
      <li>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Enter your Email here"  value={mail} onSubmit={ e => setData(e.target.value) }  required/> 
        
      </li>
      
      <li>
        <label htmlFor="message">Query</label>
    <textarea rows="6" id="message" placeholder="Enter your Query here" value={msg} onSubmit={ e => setData(e.target.value) }     ></textarea> 
      </li>
     <li>
        <button type="submit" onSubmit ={handleGet}  >Submit</button>
      </li>
    </ul>
  </form>
  </div></div>          
</section>
           </div>
        );
    
}

export default Contact;