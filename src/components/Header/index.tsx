import Image from 'next/image'
import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { incrementByAmount } from "../../redux/counter";
import { RootState } from "../../redux/store";

const Header = () => {
  const { count } = useSelector((state: RootState) => state.counter);
  const [show, setShow] = useState<boolean>(false)
  const dispatch = useDispatch();
  return (
    <section className="container px-5 py-12 mx-auto flex md:items-center md:py-12 md:px-8 lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
      <div className='header-container'>
        <div className='main-header-div'>
          <div className='header-left'>
            <div>
              <a href='/'>
                <Image
                  src="https://assets.website-files.com/63c3f1995d4c3581bbc944b5/63c3fed42405e70f33df42ee_logo.svg"
                  width="100"
                  height="100"
                  alt="olive_logo"
                />
              </a>
            </div>
            <div>
              <a className='hiring-label red w-inline-block'>
                We are hiring!
              </a>
            </div>
          </div>
          <div className='header-right'>
            <nav className='header-nav'>
              <a href="#" className='navbar-menu-item-link w-inline-block'>
                <div className='navbar-menu-item-text'>Work</div>
              </a>
              <a href="#" className='navbar-menu-item-link w-inline-block'>
                <div className='navbar-menu-item-text'>Service</div>
              </a>
              <a href="#" className='navbar-menu-item-link w-inline-block'>
                <div className='navbar-menu-item-text'>About</div>
              </a>
              <a href="/blog" className='navbar-menu-item-link w-inline-block'>
                <div className='navbar-menu-item-text'>Blog</div>
              </a>
              <a href="#" className='navbar-menu-item-link w-inline-block'>
                <div className='navbar-menu-item-text'>Pages</div>
              </a>
              <a className='navbar-menu-item-link w-inline-block'>
                <div onClick={() => dispatch(incrementByAmount(1))} className='navbar-menu-item-text'>Cart {count}</div>
              </a>
            </nav>
            <div className='navbar-right-button'>
              <a className='button small w-inline-block'>
                <div>
                  Get in Touch
                </div>
              </a>
            </div>
            <div className='mobile-header-toggle' onClick={() => setShow(!show)}>
              <div className={`menu line-1 ${show ? 'line1-trans' : ''}`}></div>
              <div className={`menu line-2 ${show ? 'line2-trans' : ''}`}></div>
              <div className={`menu line-3 ${show ? 'line3-trans' : ''}`}></div>
            </div>
          </div>
        </div>
        <div className="line"></div>
      </div>
      <div className='mobile-menu' style={{ display: `${show ? 'block' : 'none'}` }}>
        <div>
          <div className='mobile-menu-container'>
            <div className="mobile-menu-nav">
              <a href="#" className="mobile-menu-nav-link">
                <div className="mobile-menu-nav-text">Work</div>
              </a>
              <a href="#" className="mobile-menu-nav-link">
                <div className="mobile-menu-nav-text">Services</div>
              </a>
              <a href="#" className="mobile-menu-nav-link">
                <div className="mobile-menu-nav-text">About</div>
              </a>
              <a href="/blog" className="mobile-menu-nav-link">
                <div className="mobile-menu-nav-text">Blog</div>
              </a>
              <a href="#" className="mobile-menu-nav-link">
                <div className="mobile-menu-nav-text">Shop</div>
              </a>
              <a href="#" className="mobile-menu-nav-link">
                <div className="mobile-menu-nav-text">Jobs</div>
              </a>
              <a href="#" className="mobile-menu-nav-link">
                <div className="mobile-menu-nav-text">Contact</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}

export default Header