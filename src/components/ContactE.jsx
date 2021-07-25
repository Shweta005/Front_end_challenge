import React, { useState } from 'react'
import './css/Contact.css'
import emailjs from 'emailjs-com';

const Result =()=>{
  return(
    <p>Your msg has been succesfully sent</p>
  )
}
export default function ContactE(props) {
  const[result,showResult] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_sdkbffc', 'template_n47w6ar', e.target, 'user_TLn0EJ5mUwgJ14XnheroC')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
      showResult(true);
  }
  return (
    <div>
       <section id="contact">
               <div className="body">
               <div className="ccontainer">
         <form onSubmit={sendEmail} >
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
      <li>{result ? <Result/>: null}</li>

    </ul>
  </form>
  </div></div>          
</section>
    </div>
  )
}
