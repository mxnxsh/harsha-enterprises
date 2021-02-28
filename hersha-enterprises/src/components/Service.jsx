import React from 'react';
import Card from "./Card";

function Service() {
  return (
    <>
      <section id='service'>
        <div className='container'>
          <div class="center">
            <h1 class="section-title">Services</h1>
          </div>
            <div className="row center">
              <Card />
            </div>
        </div>
      </section>
    </>
  );
}

export default Service;
