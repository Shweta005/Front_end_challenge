import React from 'react';
import './App.css';
import logo from './assets/logo.png';
function App() {
  return (
    <div className="App">

<header>
        <div className="container">
            <div id="brand">
                <h1>Web3.js</h1>
            </div>
            <nav>
                <ul>
                    {/* <li><a href="#"></a></li> */}
                    <li><a href="#">Contact</a></li>
                    {/* <li><a href="#"></a></li> */}
                </ul>
            </nav>
        </div>
    </header>

    {/* <!-- SHOWCASE --> */}
    <div id="showcase">
        <div className="container">
          <img src = {logo } height="100rem" width="160rem" alt=""></img>
            <h1>Web3.Js</h1>
            <section class="typewriter__wrapper">
    <div>
      <h3><b><p class="typewriter__text line-1">Collection of Libraries</p></b></h3>
      <h3><b><p class="typewriter__text line-2">to interact with ethereum</p></b></h3>
      <h3><b><p class="typewriter__text line-3">node using  HTTP, IPC or WebSocket.</p></b></h3>
    </div>
  </section>
            {/* <p class="line-1 anim-typewriter">Is a Collection of libraries that allow you </p> */}
            {/* <p class="line-1 anim-typewriter">Is a Collection of libraries that allow you </p>
            <p class="line-1 anim-typewriter"> a local or remote ethereum node using HTTP,</p>
            <p class="line-1 anim-typewriter">IPC or WebSocket. </p> */}
        </div>
    </div>

    {/* <!-- NEWSLETTER --> */}
    <div id="newsletter">
        <div className="container">
            <h2>Join our newsletter</h2>
            <form>
                <input type="text" placeholder="Enter your email"/>
                <button type = "submit">Submit</button>
            </form>
        </div>
    </div>

    {/* <!-- SERVICES --> */}
    <div id="services">
        <h1>WE OFFER</h1>
        <div className="container">
            <div className="box">
                <img src="https://image.ibb.co/c6sxF9/html.png" alt="html"/>
                <h2>HTML</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo, quas.Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="box">
                    <img src="https://image.ibb.co/fD3yNp/css.png" alt="css"/>
                    <h2>CSS</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, eum?Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="box">
                    <img src="https://image.ibb.co/c0OnF9/graphic_design.png" alt="graphic design"/>
                    <h2>Graphics Design</h2>
                    <p>Lorem ipset consectetur adipisicing elit. Provident, eligendi?Lorem ipsum dolor sit amet.</p>
            </div>
        </div>
    </div>
  <div id="services">
        <h1>WE OFFER</h1>
        <div className="container">
            <div className="box">
                <img src="https://image.ibb.co/c6sxF9/html.png" alt="html"/>
                <h2>HTML</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo, quas.Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="box">
                    <img src="https://image.ibb.co/fD3yNp/css.png" alt="css"/>
                    <h2>CSS</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, eum?Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="box">
                    <img src="https://image.ibb.co/c0OnF9/graphic_design.png" alt="graphic design"/>
                    <h2>Graphics Design</h2>
                    <p>Lorem ipset consectetur adipisicing elit. Provident, eligendi?Lorem ipsum dolor sit amet.</p>
            </div>
        </div>
    </div>
    {/* <!-- FOOTER --> */}
    <footer>
        <p>Copyright &copy; Web.js 2021</p>
    </footer>


<script></script>


















  {/* <img src="https://i.pinimg.com/originals/15/2b/a2/152ba2bdfbdbeeea8d0d64451347399c.gif" />
<div className="c c1"></div>
<div className="c c2"></div>
<div className="c c3"></div>
<div className="c c4"></div>
<div className="c c5"></div>
<div className="c c6"></div>
<div className="c c7"></div>
<div className="c c8"></div>
<div className="c c9"></div>
<div className="c c10"></div>
<div className="c c11"></div>
<div className="c c12"></div>
<div className="c c13"></div>
<div className="c c14"></div>
<div className="c c15"></div>
<div className="c c16"></div>
<div className="c c17"></div>
<div className="c c18"></div>
<div className="c c19"></div>
<div className="c c20"></div>
<div className="c c21"></div>
<div className="c c22"></div>
<div className="c c23"></div>
<div className="c c24"></div>
<div className="c c25"></div>
<div className="c c26"></div>
<div className="c c27"></div>
<div className="c c28"></div>
<div className="c c29"></div>
<div className="c c30"></div> */}

    </div>
  );
}

export default App;
