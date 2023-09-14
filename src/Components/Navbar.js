import React from 'react';

function Banner() {
  return (
    <div className='banner container'>
      <div className="row">
          <div className="col-md-6 col-sm-12 text-center">
            <p><a href="#">Mahama Block, Accra Digital Center</a></p>
            <p><a href="#">✉: info@codetraingh.com</a></p>
            <p><a href="#">✆: 0548604333 / 0545792397</a></p>
          </div>
          <div className="col-md-6 col-sm-12 text-center">
            <img src="images/codetrainlogo.png" height="100vh"  alt="" />
          </div>
        </div>
    </div>
  );
};

export default Banner;
