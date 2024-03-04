import React, { useState } from 'react';
import './write.css';
import rite from '../../picture/05.jpg';

function Write() {
  const [title, setTitle]=useState('');
  const [text, setText]=useState('');
  const handlclick= (e)=>{
    e.preventDefault();
    console.log(title)
    console.log(text)
  }
  return (
    <div className='write'>
      <img src={rite} alt="" className="writeImg" />
      <form className='writeForm'>
        <div className="writeFormGroup">
          <label htmlFor="fileInput"><i className='writeIcon fas fa-plus'></i></label>
          <input type="file" id='fileInput' style={{display:'none'}} />
          <input type="text" placeholder='Title' onChange={(e)=>{setTitle(e.target.value)}} className='writeInput' autoFocus={true}/>
        </div>
        <div className="writeFormGroup">
          <textarea placeholder='Tell your story...' type='text' onChange={(e)=>{setText(e.target.value)}} className='writeInput writeText'></textarea>
        </div>
        <button className='writeSubmit' onClick={handlclick}>publish</button>
      </form>
    </div>
  )
}

export default Write