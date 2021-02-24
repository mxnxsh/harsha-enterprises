import React from 'react';
import Footer from './Footer';

function Contact() {
  return (
    <>
      <section id='contact'>
        <div className='container pt-5'>
          <div className='row pt-5 pb-3'>
            <div className='col-md-6'>
              <div className='row'>
                <div className='col-md-12 mt-4 mb-3'>
                  <div className='row'>
                    <div className='col-sm-3'>
                      <div className='contact contact_circle'>
                        <div>
                          <i className='fas fa-map-marker-alt'></i>
                        </div>
                      </div>
                    </div>
                    <div
                      className='col-sm-9 contact_text'
                      style={{ fontSize: '18px', fontWeight: '500' }}
                    >
                      <p className='add'>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                      </p>
                    </div>
                  </div>
                </div>
                <div className='col-md-12 mb-4'>
                  <div className='row'>
                    <div className='col-sm-3'>
                      <div className='contact contact_circle'>
                        <div>
                          <i className='fas fa-phone'></i>
                        </div>
                      </div>
                    </div>
                    <div
                      className='col-sm-9 contact_text'
                      style={{ fontSize: '18px', fontWeight: '500' }}
                    >
                      <p>
                        +91 1234567891 <br /> +91 1234567891
                      </p>
                    </div>
                  </div>
                </div>
                <div className='col-md-12 mb-3'>
                  <div className='row'>
                    <div className='col-sm-3'>
                      <div className='contact contact_circle'>
                        <div>
                          <i className='fab fa-google'></i>
                        </div>
                      </div>
                    </div>
                    <div
                      className='col-sm-9 contact_text'
                      style={{ fontSize: '18px', fontWeight: '500' }}
                    >
                      <p>test123@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='jumbotron ml-auto contact_form bg-light'>
                <form>
                  <div className='form-group'>
                    <label htmlFor='exampleInputEmail1'>Full Name</label>
                    <input
                      type='text'
                      className='form-control'
                      id='exampleInputEmail1'
                      aria-describedby='emailHelp'
                    />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='exampleInputPassword1'>
                      Contact Number
                    </label>
                    <input
                      type='number'
                      className='form-control'
                      id='exampleInputPassword1'
                    />
                    <small classNamea='form-text text-muted'>
                      We'll never share your details with anyone else.
                    </small>
                  </div>
                  <button type='submit' className='btn btn-primary'>
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Contact;
