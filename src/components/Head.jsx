import React from 'react';
import './head.css';
import bara from '../picture/computer.jpg';

function Head() {
  return (
    <div className='head'>
        <div className="title">
            <span className='titleS'>
              Gérer facilement les articles, images et autres éléments du Blog
            </span>
            <span className='titleG'>Blog</span>
        </div>
        <img className='headImg' src={bara} alt="..." />
    </div>
  )
}

export default Head