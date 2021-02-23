import React from 'react';
import Footer from './Footer';

function Service() {
  return (
    <>
      <section id='service'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-4 service_img'>
              <img
                src='./images/45d6d89793.jpg'
                className='card-img-top'
                alt='...'
              />
            </div>
            <div className='col-md-8'>
              <h3 className='pt-2'>Digital Signature</h3>
              <p className='pt-3' style={{ fontSize: '18px' }}>
                Recently Added to our Basket of Hassle Free Process, Harsha
                Enterprises bring you Digital Signature Certificate / DSC. We
                are Authorised Registration Authority (RA) for Providing Digital
                Signature Certificates for Individual as Well as Organisations.
              </p>

              <button className='btn btn-success m-2'>Buy Now</button>
              <button className='btn btn-outline-danger'>Track My Order</button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Service;
