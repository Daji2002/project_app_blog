import React from 'react';
import './singlePost.css';
import sing from '../picture/04.jpg';

function SinglePost() {
   
  return (
    <div className='singlePost'>
        <div className="singlePostWrapper">
            <img src={sing} className='singlePostImg' alt="sinle" />
            <h1 className='singlePostTitle'>
                Lorem ipsum dolor sit amet consectetur.
                <div className="singlePostEdit">
                    <i className='singlePostIcon far fa-edit'></i>
                    <i className='singlePostIcon far fa-trash-alt'></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor">Author: <b>daji</b></span>
                <span className="singlePostDate">{new Date().toLocaleDateString()} ago</span>
            </div>
            <p className='singlePostDesc'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione repellendus beatae voluptate a! 
                Distinctio iure ex placeat temporibus minima excepturi commodi aperiam rerum vitae aliquid? 
                Assumenda voluptatum accusantium aut molestias. 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Ratione repellendus beatae voluptate a! Distinctio iure ex placeat temporibus minima excepturi 
                commodi aperiam rerum vitae aliquid? Assumenda voluptatum accusantium aut molestias.
                Distinctio iure ex placeat temporibus minima excepturi commodi aperiam rerum vitae aliquid? 
                Assumenda voluptatum accusantium aut molestias. 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Ratione repellendus beatae voluptate a! Distinctio iure ex placeat temporibus minima excepturi 
                commodi aperiam rerum vitae aliquid? Assumenda voluptatum accusantium aut molestias.
                Distinctio iure ex placeat temporibus minima excepturi commodi aperiam rerum vitae aliquid? 
                Assumenda voluptatum accusantium aut molestias. 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Ratione repellendus beatae voluptate a! Distinctio iure ex placeat temporibus minima excepturi 
                commodi aperiam rerum vitae aliquid? Assumenda voluptatum accusantium aut molestias.
                Distinctio iure ex placeat temporibus minima excepturi commodi aperiam rerum vitae aliquid? 
                Assumenda voluptatum accusantium aut molestias. 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Ratione repellendus beatae voluptate a! Distinctio iure ex placeat temporibus minima excepturi 
                commodi aperiam rerum vitae aliquid? Assumenda voluptatum accusantium aut molestias.
                Distinctio iure ex placeat temporibus minima excepturi commodi aperiam rerum vitae aliquid? 
                Assumenda voluptatum accusantium aut molestias. 
            </p>
        </div>
    </div>
  )
}

export default SinglePost;