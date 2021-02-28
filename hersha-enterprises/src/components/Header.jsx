import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
    <nav
      className='navbar navbar-expand-lg navbar-light'
      style={{ backgroundColor: '#1F4DA1' }}
    >
      <div className='container'>
        <Link className='navbar-brand' to='/' style={{ color: 'white' }}>
          <img
            src='./images/6737cdb916.png'
            height='38px'
            alt='hersha enterprises logo'
          />
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item active glow'>
              <Link
                className='nav-link nav_urls'
                to='/'
                style={{ color: 'white' }}
              >
                Home
              </Link>
            </li>
            <li className='nav-item  glow'>
              <Link
                className='nav-link nav_urls'
                to='#'
                style={{ color: 'white' }}
                data-toggle="modal" data-target="#exampleModal"
              >
                Track Order
              </Link>
            </li>
            <li className='nav-item active glow'>
              <Link
                className='nav-link nav_urls'
                to='/service'
                style={{ color: 'white' }}
              >
                Service
              </Link>
            </li>
            <li className='nav-item active glow'>
              <Link
                className='nav-link nav_urls'
                to='/about'
                style={{ color: 'white' }}
              >
                About Us
              </Link>
            </li>
            <li className='nav-item active glow'>
              <Link
                className='nav-link nav_urls'
                to='/contact'
                style={{ color: 'white' }}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    
    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Harsha Enterprises</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form action="">
            <div className="form-group">
              <label for="exampleInputOrderId">Enter Order Id to track</label>
              <input type="text" className="form-control" id="exampleInputOrderId" placeholder="Order Id" />
            </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary">Track My Order</button>
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Header;
