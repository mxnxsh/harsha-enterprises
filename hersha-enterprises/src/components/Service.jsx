import React from 'react';
import Card from './Card';

function Service() {
  return (
    <>
      <section id='service'>
        <div className='container'>
          <div className='center'>
            <h1 className='section-title'>Services</h1>
          </div>
          <div className='row center'>
            <Card />
          </div>
        </div>
      </section>
    </>
  );
}

export default Service;
