import React from 'react';

function Payment() {
  return (
    <>
      <section id='payment'>
        <div className='container'>
          <div className='center'>
            <h1 className='section-title'>Payment</h1>
            <div className='row'>
              <div className='col-md-6'>
                <img
                  className='mt-5'
                  src='./images/paytm_name.png'
                  alt='Paytm Logo Icon'
                />
                <h3 className='mt-2'>Harsha Enterprises</h3>
                <h4 className='mt-2'>+91 9324739637</h4>
              </div>
              <div className='col-md-6'>
                <img
                  className='d-block ml-auto paytm_qr'
                  src='./images/WhatsApp Image 2021-02-23 at 2.19.51 PM.jpeg'
                  alt=''
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Payment;
