import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
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
                to='/service'
                style={{ color: 'white' }}
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
  );
}

export default Header;
