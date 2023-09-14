import React from 'react';

function Hero() {
  return (
    <div className='container hero'>
      <div className='row'>
        <div className='col-md-12 col-sm-12'>
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <a className="navbar-brand logo" href="#">
              <img src="https://horizonsoffices.com.gh/wp-content/uploads/2021/10/download-160x45.png" 
              alt="Office logo" width="200" height="50" />
            </a>
            <div className="flag">
              <a className="navbar-brand" href="#">
                <img className='fg' src="images/Flag_of_Ghana.svg.png"  alt="Office logo" width="70" height="30" />
                <img className='fg' src="images/Flag_of_South_Africa.svg.png"  alt="Office logo" width="70" height="30" />
                <img className='fg' src="images/Flag_of_Nigeria.png"  alt="Office logo" width="70" height="30" />
                <img src="images/Kenya_flag_300.png"  alt="Office logo" width="70" height="30" />
              </a>
            </div>
            <div className="collapse navbar-collapse ab" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">About Us</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Hero;