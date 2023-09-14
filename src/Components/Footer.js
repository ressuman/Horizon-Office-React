import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className='footer container'>
        <div class="row ft">
          <div class="col-md-3 col-sm-12">
            <h5 class="text-uppercase" style={{color: "gold"}} ><b>Visit Us IN ghana</b></h5>
            <p style={{color: "greenyellow"}}>Accra,Ghana</p>
            <p class="ad">Lorem ipsum, dolor sit amet </p>
            <p class="ad">labore recusandae</p>
            <p class="ad">illo accusamus.</p>   
          </div>
          <div class="col-md-3 col-sm-12">
            <h5 class="text-uppercase" style={{color: "gold"}}><b>Visit Us IN south africa</b></h5>
            <p style={{color: "greenyellow"}}>Johannesburg,South Africa</p>
            <p class="ad">consectetur adipisicing elit. </p>
            <p class="ad">dolorum fuga</p>
            <p class="ad">Consectetur eos,</p>
          </div>
          <div class="col-md-3 col-sm-12">
            <h5 class="text-uppercase" style={{color: "gold"}}><b>Visit Us IN nigeria</b></h5>
            <p style={{color: "greenyellow"}}>Lagos,Nigeria</p>
            <p class="ad">cumque vitae molestias ipsum vero</p>
            <p class="ad">totam at</p>
          </div>
          <div class="col-md-3 col-sm-12">
            <h5 class="text-uppercase" style={{color: "gold"}}><b>Visit Us IN kenya</b></h5>
            <p style={{color: "greenyellow"}}>Nairobi,Kenya</p>
            <p class="ad">voluptatem placeat id soluta rerum </p>
            <p class="ad"> deserunt. Iste,</p>
          </div>
        </div>
      </div>
    );
  };
};

export default Footer;