import React from 'react';
import Footer from './Footer';

function Contact() {
  return (
    <>
      <section id='contact'>
        <div className='container pt-5'>
<<<<<<< HEAD
          <h1 className="section-title">Visit Us...</h1>
          <h4>Head Office @</h4>
          <div className="row">
            <div className="col-md-4">
              <div className="row">
                <div className="col-md-3 pt-2">
                  <div className='contact contact_circle'>
                    <div>
                      <i className='fas fa-map-marker-alt'></i>
=======
          <h1 class='section-title'>Contact Us</h1>
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
>>>>>>> 3a3dfb4e0800b142ebc9fd6fc52b4a78c1af8ec8
                    </div>
                  </div>
                </div>
                <div className="col-md-9">
                <p className='add'>
                  3, Satyam Shopping Center, Near Navratri Ground, MB Estate, Virar West - 401 303.
                </p>
                </div>
              </div>
            </div>
            <div className="col-md-4" style={{ textAlign: 'center' }}>
              <h5>
                Monday to Sunday
              </h5>
              <p>
                (Open 7 Days a Week)
              </p>
            </div>
            <div className="col-md-4" style={{ textAlign: 'center' }}>
              <h5>
                Between 10:30 am to 08:30 pm 
              </h5>
            </div>
          </div>

          <h4>Branch @</h4>
          <div className="row">
            <div className="col-md-4">
              <div className="row">
                <div className="col-md-3 pt-3">
                  <div className='contact contact_circle'>
                    <div>
                      <i className='fas fa-map-marker-alt'></i>
                    </div>
                  </div>
                </div>
                <div className="col-md-9">
                <p className='add'>
                4, Poonam Avenue A & B, Near Agarwal Paramount, Global City, Virar West - 401 303.
                </p>
                </div>
              </div>
            </div>
            <div className="col-md-4" style={{ textAlign: 'center' }}>
              <h5>
                Monday to Sunday
              </h5>
              <p>
                (Open 7 Days a Week)
              </p>
            </div>
            <div className="col-md-4" style={{ textAlign: 'center' }}>
              <h5>
                Between 10:30 am to 06:30 pm 
              </h5>
            </div>
          </div>
        </div>
      </section>

      <svg className="gray" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 80">
        <path fill="#e7e7de" fill-opacity="1" d="M0,0L1440,0L1440,0L0,80Z"></path>
      </svg>

      <section id="connect">
        <div className='container pt-5'>
          <h1 className="section-title">Connect to Us...</h1>
            <div className="row pt-5">
              <div className="col-md-4" style={{ textAlign: 'center' }}>
                <div className='contact2 contact_circle'>
                  <div>
                    <i className='fab fa-google'></i>
                  </div>
<<<<<<< HEAD
                </div>
                <p className='mt-2'>harshaenterprises879@gmail.com</p>
              </div>
              <div className="col-md-4" style={{ textAlign: 'center' }}>
                <div className='contact2 contact_circle'>
                  <div>
                    <i className='fas fa-phone'></i>
=======
                  <div className='form-group'>
                    <label htmlFor='exampleInputPassword1'>
                      Contact Number
                    </label>
                    <input
                      type='number'
                      className='form-control'
                      id='exampleInputPassword1'
                    />
                    <small className='form-text text-muted'>
                      We'll never share your details with anyone else.
                    </small>
>>>>>>> 3a3dfb4e0800b142ebc9fd6fc52b4a78c1af8ec8
                  </div>
                </div>
                <p className='mt-2'>harshaenterprises879@gmail.com</p>
              </div>
              <div className="col-md-4" style={{ textAlign: 'center' }}>
                <a href="https://www.instagram.com/harsha.enterprises/" style={{ textDecoration: 'none', color: 'black' }}>
                <div className='contact2 contact_circle'>
                  <div>
                    <i class="fab fa-instagram"></i>
                  </div>
                </div>
                <p className='mt-2'>Instagram</p>
                </a>
              </div>
              
            </div>
        </div>
      </section>

      <svg className="gray_2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 80">
        <path fill="#e7e7de" fill-opacity="1" d="M0,80L1440,0L1440,80L0,80Z"></path>
      </svg>

      <section id="contact_querry">
          <h4 class="section-title p-3">Submit a querry...</h4>
        <div className='jumbotron mx-auto contact_form'>
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
            </div>
            <div className='form-group'>
              <label htmlFor='exampleInputPassword1'>
                Querry
              </label>
              <textarea
                type='text'
                className='form-control'
                id='exampleInputPassword1'
              />
              <small classNamea='form-text text-muted'>
                We'll never share your details with anyone else.
              </small>
            </div>
            <button type='submit' className='btn btn-primary d-block mx-auto'>
              Submit
            </button>
          </form>
        </div><br/>
      </section>

      <Footer />


    </>
  );
}

export default Contact;
