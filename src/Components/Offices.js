import React from 'react';

function Offices(props) {
  return (
    <div className='container offices'>
      <div className='row'>
        <div className="col-md-3 col-sm-12">
          <div className="card" style={{width: '18rem'}}>
            <img src={props.src} className="card-img-top" height="200" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-center"><i>{props.content}</i></h5>
              <p className="card-text">Some quick example text to build on the card title and make up the 
                bulk of the card's content. Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Odit fugiat hic eligendi, vel perferendis dolorum nisi dolor praesentium sequi veniam 
                assumenda harum corrupti deserunt cupiditate maxime, saepe tempora? Nemo, facilis! </p>
              <a href="#" className="btn btn-primary">For more details</a>
            </div>
          </div>
          </div>
      </div>
    </div>
  );
};

export default Offices;