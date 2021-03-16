import React from 'react';
import Service from './Service';
import Payment from "./Payment";
import Contact from "./Contact";
import Connect from './Connect';
import Footer from './Footer';

function Home() {
  return (
    <>
      <section id='home'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
              <div className='mx-auto'>
                <img
                  src='./images/0eb1035379.png'
                  className='rounded mx-auto d-block home_image'
                  alt='home logo'
                />
                <button
                  type='button'
                  className='btn btn-outline-success callUs'
                >
                  <i id='call_icon' className='fas fa-phone'></i>&nbsp; Call Us
                </button>
              </div>
            </div>

            <div className="col-md-6 text">
              <h2>Harsha Enterprises</h2>
              <p>At Harsha Enterprises we are committed to make processing leave and license agreements easy and hassle free. We also bring you RERA consultation, Digital Signature Registration... All under one roof</p>
            </div>
          </div>
        </div>
      </section>
      <svg
        className='gray'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1440 80'
      >
        <path
          fill='#e7e7de'
          fillOpacity='1'
          d='M0,0L1440,0L1440,0L0,80Z'
        ></path>
      </svg>
      <Service />
      <svg className="gray_2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 80">
        <path fill="#e7e7de" fill-opacity="1" d="M0,80L1440,0L1440,80L0,80Z"></path>
      </svg>
      <Connect />
    </>
  );
}

export default Home;
