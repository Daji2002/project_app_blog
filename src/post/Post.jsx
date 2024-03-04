import React, { useState } from 'react';
import './post.css';
import { Link } from 'react-router-dom';
import image1 from '../picture/03.jpg';
import image2 from '../picture/04.jpg';
import image3 from '../picture/06.jpg';
import image4 from '../picture/05.jpg';
import image5 from '../picture/01.jpg';
import image6 from '../picture/02.jpg';
import image7 from '../picture/03.jpg';

function Post() {
  const [carts] = useState([
    {
      id: 1,
      image:image1,
      title:"Lorem ipsum dolor sit amet consectetur adipisicing elit",
    },
    {
      id: 2,
      image:image2,
      title:"Lorem ipsum dolor sit amet consectetur adipisicing elit",
    },
    {
      id: 3,
      image:image3,
      title:"Lorem ipsum dolor sit amet consectetur adipisicing elit",
    },
    {
      id: 4,
      image:image4,
      title:"Lorem ipsum dolor sit amet consectetur adipisicing elit",
    },
    {
      id: 5,
      image:image5,
      title:"Lorem ipsum dolor sit amet consectetur adipisicing elit",
    },
    {
      id: 6,
      image:image6,
      title:"Lorem ipsum dolor sit amet consectetur adipisicing elit",
    },
    {
      id: 7,
      image:image7,
      title:"Lorem ipsum dolor sit amet consectetur adipisicing elit",
    },
  ])
  const date = new Date();
  return (
    
    <>
      {carts.map((cart)=>(
          <div className='post' key={cart.id}>
              <img className='postImg' src={cart.image} alt="post" />
              <div className="postInfo">
                  <div className="postCats">
                      <span className="postCat">Music</span>
                      <span className="postCat">Life</span>
                  </div>
                  <Link className='link' to={`/post/${cart.id}`}><span className='postTitle'>{cart.title}</span></Link>
                  <hr />
                  <span className="postDate">{date.toLocaleDateString()} ago</span>
              </div>
              <p className='postDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam incidunt, nemo voluptas odio distinctio beatae, reprehenderit commodi assumenda quia tempore esse atque animi excepturi fuga ullam itaque molestiae, libero possimus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam incidunt, nemo voluptas odio distinctio beatae, reprehenderit commodi assumenda quia tempore esse atque animi excepturi fuga ullam itaque molestiae, libero possimus?</p>
          </div>))}
    </>
  )
}

export default Post