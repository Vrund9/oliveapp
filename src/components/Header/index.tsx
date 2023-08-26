import Image from 'next/image'
import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { incrementByAmount } from "../../redux/counter";
import { RootState } from "../../redux/store";

const Header = () => {
  const { count } = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();
  return (
    <section className="container px-5 py-12 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
      <div className='header-container'>
        <div className='main-header-div'>
          <div className='header-left'>
            <div>
              <a>
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
              {/* <Button name="Get in Touch" /> */}
              <a className='button small w-inline-block'>
                <div>
                  Get in Touch
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="line"></div>
      </div>
    </section>
  )
}

export default Header