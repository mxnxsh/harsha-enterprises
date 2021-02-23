import React from 'react';
import Footer from './Footer';

function About() {
  return (
    <>
      <section id='about' className='pt-3 pb-3'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
              <div className='center pt-5'>
                <h1 className='section-title mt-4'>About Us</h1>
                <p className='about_description'>
                  Harsha Enterprises an Consulting Firm Based in Virar,
                  Maharashtra, Was Founded in 2017 with a View to Simplify
                  Registration of Leave and License Agreements.
                </p>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='rounded ml-auto d-block'>
                <iframe
                  className='home_video'
                  src='https://www.youtube.com/embed/J46t9FNaeDI'
                  frameborder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
