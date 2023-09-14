import React from 'react';
import Offices from './Offices';

function Plans() {
  return (
    <div className='container plans'>
      <div className='row'>
        <div className='col-md-12 col-sm-12'>
          <h1 class="display-2 text-center">Plans</h1>
        </div>
      </div>
      <div className='row'>
        <div id='offices'>
          <Offices src="images/office0.jpg" content='Virtual Office'/>
          <Offices src="images/office1.jpg" content='Customized Office'/>
          <Offices src="images/office2.jpg" content='Serviced Office'/>
          <Offices src="images/office3.jpg" content='Meeting Rooms'/>
        </div>
      </div>
    </div>
  );
};

export default Plans;
