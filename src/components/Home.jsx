import React from 'react';
import Service from './Service';
import Payment from './Payment';
import Contact from './Contact';

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

            <div className='col-md-6 text'>
              <h2>Heading....</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div class='contact_details'>
        <div class='contact_container'>
          <a href='https://api.whatsapp.com/send?phone=+918087932393&text=Can you help me to deal with the property!!'>
            <i id='whats_app' class='fab fa-whatsapp'></i>
          </a>
        </div>
        <br />
        <div class='contact_container'>
          <a href='tel:+918087932393'>
            <i id='call' class='fas fa-phone'></i>
          </a>
        </div>
        <br />
        <div class='contact_container'>
          <a href='mailto:harshaenterprises879@gmail.com'>
            <i id='gmail' class='fab fa-google'></i>
          </a>
        </div>
      </div>
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
      <svg className='gray_2' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 80'>
        <path
          fill='#e7e7de'
          fillOpacity='1'
          d='M0,80L1440,0L1440,80L0,80Z'
        ></path>
      </svg>
      <Payment />
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
      <Contact />
    </>
  );
}

export default Home;
