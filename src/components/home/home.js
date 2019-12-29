import React from 'react';
import './home.scss';
import Information from '../information/information'

function Home() {
  return (
    <div className="home">
      <p className="home_title">Store Information</p>
      <div className="container">
        <div className="row mx-md-n6">
          <Information/>
          <div className="col-7"><div className="p-3 border bg-light">DEVLIVERY DEFAULT MESSAGE</div></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
