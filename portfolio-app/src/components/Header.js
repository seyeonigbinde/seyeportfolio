import React from 'react'

const Header = () => {
  return (
    <header>
      <div className='logo'>
        <h2> Stevens Design</h2>
      </div>
      <nav className='responsive_nav'>
        <div className='dropdown'>
          <i className='fas fa-bars fa-2x'></i>
          <div className='dropdown-content'>
            <a href='#profile' alt=''>
              {' '}
              Profile
            </a>
            <a href='#skills' alt=''>
              {' '}
              Skills
            </a>
            <a href='#portfolio' alt=''>
              {' '}
              Projects
            </a>
            <a href='#contact' alt=''>
              {' '}
              Contact
            </a>
            <a
              href='https://drive.google.com/file/d/13ALMid63SgxQXlSufka4k0A0T8XXSYhv/view?usp=sharing'
              alt=''
            >
              <button> Resume</button>
            </a>
          </div>
        </div>
      </nav>
      <nav className='desktop_nav'>
        <a href='#profile' alt=''>
          {' '}
          Profile
        </a>
        <a href='#skills' alt=''>
          {' '}
          Skills
        </a>
        <a href='#portfolio' alt=''>
          {' '}
          Projects
        </a>
        <a href='#contact' alt=''>
          {' '}
          Contact
        </a>
        <a
          href='https://drive.google.com/file/d/13ALMid63SgxQXlSufka4k0A0T8XXSYhv/view?usp=sharing'
          alt=''
        >
          <button> Resume</button>
        </a>
      </nav>
    </header>
  )
}

export default Header
