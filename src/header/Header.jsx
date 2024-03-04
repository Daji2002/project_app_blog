import React from 'react'
import './header.css'
import { Link } from 'react-router-dom';
import pro from '../picture/prof.jpg';

function Header() {
  const user = false;
  return (
    <div className='header'>
        <div className="headerLift">
        <i className="topIcon fa-brands fa-square-facebook"></i>
        <i className="topIcon fa-brands fa-square-twitter"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
        <i className="topIcon fa-brands fa-square-pinterest"></i>
        </div>
        <div className="headerCenter">
          <ul className="liste">
            <li className="listeItmse"><Link className='link' to='/'>HOME</Link></li>
            <li className="listeItmse"><Link className='link' to='/about'>ABOUT</Link></li>
            <li className="listeItmse"><Link className='link' to='/'>CONTACT</Link></li>
            <li className="listeItmse"><Link className='link' to='/write'>WRITE</Link></li>
            <li className="listeItmse">{user&&"LOGOUT"}</li>
          </ul>
        </div>
        <div className="headerRight">
          {user?(
            <Link className='link' to='/sittings'><img src={pro} alt="" className="photo" /></Link>
          ):(
            <ul className="liste">
              <li className="listeItmse"><Link className='link' to='/register'>Register</Link></li>
              <li className="listeItmse"><Link className='link' to='/login'>Login</Link></li>
            </ul>
          )}
          <i className="topSearch fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}

export default Header