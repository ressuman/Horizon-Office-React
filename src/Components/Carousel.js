import React from 'react';

const Carousel = () => {
  return (
    <div className='container carousel'>
      <div className='row'>
        <div className='col-md-12 col-sm-12'>
          <div id="carouselExampleFade" class="carousel slide carousel-fade car">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="images/office5.jpg" className="d-block w-100" height="500" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="images/office6.jpg" className="d-block w-100" height="500" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="images/office8.jpg" className="d-block w-100" height="500" alt="..." />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
