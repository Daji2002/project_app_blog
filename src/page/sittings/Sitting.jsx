import React from 'react';
import './sitting.css';
import Sidebar from '../../sidebar/Sidebar';
import prof from '../../picture/prof.jpg';

function Sitting() {
  return (
    <div className='sitting'>
        <div className="sittingWrapper">
            <div className="sittingTitle">
                <span className="sittingUpdateTitle">Update your account</span>
                <span className="sittingDeleteTitle">Delete account</span>
            </div>
            <form className="sittingForm">
                <label>Profile Picture</label>
                <div className="sittingPP">
                    <img src={prof} alt="" />
                    <label htmlFor="fileInput">
                        <i className='sittingPPIcon far fa-user-circle'></i>
                    </label>
                </div>
                    <input type="file" id='fileInput' style={{display:'none'}} />
                    <label>Username</label>
                    <input type="text" placeholder='daji' />
                    <label>E-mail</label>
                    <input type="email" placeholder='daji@mail.com' />
                    <label>Password</label>
                    <input type="password" />
                    <button className='sittingSubmit'>Update</button>
            </form>
        </div>
        <Sidebar/>
    </div>
  )
}

export default Sitting