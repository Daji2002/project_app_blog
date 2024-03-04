import React from 'react';
import './sidebar.css';
import side from '../picture/th.jpg'

function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img src={side} alt="sidebar" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta est asperiores omnis quo non repudiandae voluptas aspernatur aperiam nihil pariatur ipsa exercitationem deleniti dolore laudantium laborum sit natus, eaque dolores.</p>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className='sidebarList'>
              <li className='sidebarListItem'>Life</li>
              <li className='sidebarListItem'>Music</li>
              <li className='sidebarListItem'>Style</li>
              <li className='sidebarListItem'>Sport</li>
              <li className='sidebarListItem'>Tech</li>
              <li className='sidebarListItem'>Cinema</li>
            </ul>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">FLLOW US</span>
            <div className="sidebarSocial">
              <i className="socialIcon fa-brands fa-square-facebook"></i>
              <i className="socialIcon fa-brands fa-square-twitter"></i>
              <i className="socialIcon fa-brands fa-square-instagram"></i>
              <i className="socialIcon fa-brands fa-square-pinterest"></i>
            </div>
        </div>
    </div>
  )
}

export default Sidebar;