import React from 'react';
import Footer from './Footer';

function Home() {
  return (
    <>
      <section id='home'>
        <div className='container pt-5 pb-5'>
          <div className='mx-auto'>
            <img
              src='./images/0eb1035379.png'
              className='rounded mx-auto d-block home_image'
              alt='home logo'
            />
            <button type='button' className='btn btn-outline-success callUs'>
              <i id='call_icon' className='fas fa-phone'></i>&nbsp; Call Us
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Home;
