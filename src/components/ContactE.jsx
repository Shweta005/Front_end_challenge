import React, { Component } from 'react'
import './css/Contact.css'
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';
init("user_TLn0EJ5mUwgJ14XnheroC");
export default class ContactE extends Component {
    handleClick = (e) => {
        emailjs.sendForm('service_sdkbffc', 'template_kz8v6h9', e.target)
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
      }
    
    render() {
        
        return (
            <div>
             <section id="contact">
               <div className="body">
               <div className="ccontainer">
         <form onSubmit={this.handleClick} >
    <ul className="flex-outer">
      <center><h2 className="h2">Have Any Query ?</h2></center>
      <li>
        <label htmlFor="first-name">Name</label>
        <input type="text"  name="name" id="name" placeholder="Enter your Name here"  required/>
      </li>
      
      <li>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Enter your Email here"  name="email"
            required/> 
        
      </li>
      
      <li>
        <label htmlFor="message">Query</label>
    <textarea rows="6" id="feedback" name="message" placeholder="Enter your Query here"  required
           ></textarea> 
      </li>
     <li>
        <button type="submit"  value="Send" >Submit</button>
      </li>
    </ul>
  </form>
  </div></div>          
</section>
        
            </div>
        )
    }
}
