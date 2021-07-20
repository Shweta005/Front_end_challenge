import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
 import App from './App';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Header from './components/Header';
 import Contact from './components/Contact';
import What from './components/What';
import Install from './components/Install';
//import ContactE from './components/ContactE';



ReactDOM.render(
  <React.StrictMode>
    <Header/>
    <App/>
    <What/>
    <Install/>
    <Cards/>
    {/* <ContactE/> */}
    <Contact/>
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
