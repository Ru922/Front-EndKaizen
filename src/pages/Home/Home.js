import React from 'react';
import './Home.css';

const Home = () => {
  return(
    <>
      <img style={{ width: 200 }} className="logo" src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png" alt="" />
      <div className="container-nav">
        <div className="container-btn-nav">
          <a href="/public/js/login/login.html">
            <button style={{backgroundColor: "aquamarine"}} className="btn-nav">
              Ingresá
            </button>
          </a>
          <a href="/public/js/sigin/sigin.html">
            <button style={{backgroundColor: "#4dff00"}} className="btn-nav">
              Registrate
            </button>
          </a>
        </div>

        <div className="iconos_nav">
          <a href=""><i className="fa-brands fa-facebook"></i></a>
          <a href="https://twitter.com/KaizenZeta"><i className="fa-brands fa-twitter"></i></a>
          <a href="#"><i className="fa-brands fa-instagram"></i></a>
        </div>
      </div>
    </>
  )
}

export default Home;
