import React, { Component } from 'react'
import './css/Contact.css'
export default class Contact extends Component {
    render() {
        return (
            <div>
<div className="body">
<div className="ccontainer">
  <form>
    <ul className="flex-outer">
      <center><h2 className="h2">Have any Query ?</h2></center>
      <li>
        <label htmlFor="first-name">First Name</label>
        <input type="text" id="first-name" placeholder="Enter your first name here"/>
      </li>
      
      <li>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Enter your email here"/>
      </li>
      
      <li>
        <label htmlFor="message">Message</label>
        <textarea rows="6" id="message" placeholder="Enter your message here"></textarea>
      </li>
     <li>
        <button type="submit">Submit</button>
      </li>
    </ul>
  </form>
  </div></div>


{/* <div class="ccontainer">
<center><h3>Have any query</h3></center>
  <form action="/action_page.php">
    <label for="fname">First Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name.."/>

    <label for="lname">Last Name</label>
    <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>

  

    <label for="subject">Subject</label>
    <textarea id="subject" name="subject" placeholder="Write something.." ></textarea>

    <input type="submit" value="Submit"/>
  </form>
</div> */}
        {/* <div class="w3-container w3-content w3-padding-64"  id="contact">
        <h2 class="w3-wide w3-center">CONTACT</h2>
         <p class="w3-opacity w3-center"><i>Fan? Drop a note!</i></p>
           <div class="w3-row w3-padding-32">
       <div class="w3-col m6 w3-large w3-margin-bottom">
        <i class="fa fa-map-marker" ></i> Chicago, US<br/>
        <i class="fa fa-phone" ></i> Phone: +00 151515<br/>
        <i class="fa fa-envelope" > </i> Email: mail@mail.com<br/>
      </div>
      <div class="w3-col m6">
        <form action="/action_page.php" target="_blank">
          <div class="w3-row-padding" id="row" >
            <div class="w3-half">
              <input class="w3-input w3-border" type="text" placeholder="Name" required name="Name"/>
            </div>
            <div class="w3-half">
              <input class="w3-input w3-border" type="text" placeholder="Email" required name="Email"/>
            </div>
          </div>
          <input class="w3-input w3-border" type="text" placeholder="Message" required name="Message"/>
          <button class="w3-button w3-black w3-section w3-right" type="submit">SEND</button>
        </form>
      </div>
    </div>
  </div> */}




                 {/* <section id="contact" className="section-bg wow fadeInUp">

<div >

  <div className="csection-header">
    <h2 className="ch">Contact Us</h2>
    <p>Lorem Ipsum is simply dummy text of the printing.</p>
  </div>

  <div className="row contact-info">

    <div className="col-md-4">
      <div className="contact-address">
        <i className="ion-ios-location-outline"></i>
        <h3 className="cih3">Address</h3>
        <address>A108 Adam Street, Nx 123456, XYZ</address>
      </div>
    </div>

    <div className="col-md-4">
      <div className="contact-phone">
        <i className="ion-ios-telephone-outline"></i>
        <h3 className="cih3">Phone Number</h3>
        <p><a href="tel:+155895548855">+1 5589 55488 55</a></p>
      </div>
    </div>

    <div className="col-md-4">
      <div className="contact-email">
        <i className="ion-ios-email-outline"></i>
        <h3 className="cih3">Email</h3>
        <p><a href="mailto:info@example.com">info@example.com</a></p>
      </div>
    </div>

  </div>

  <div className="form">
    <div id="sendmessage">Your message has been sent. Thank you!</div>
    <div id="errormessage"></div>
    <form action="" method="post" role="form" className="contactForm">
      <div className="form-row">
        <div className="form-group col-md-6">
          <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
          <div className="validation"></div>
        </div>
        <div className="form-group col-md-6">
          <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
          <div className="validation"></div>
        </div>
      </div>
      <div className="form-group">
        <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
        <div className="validation"></div>
      </div>
      <div className="form-group">
        <textarea className="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
        <div className="validation"></div>
      </div>
      <div className="text-center"><button type="submit">Send Message</button></div>
    </form>
  </div>

</div>
</section> */}
           </div>
        )
    }
}
