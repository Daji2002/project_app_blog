import React from 'react';
import './home.css';
import Head from '../../components/Head';
import Posts from '../../posts/Posts';
import Sidebar from '../../sidebar/Sidebar';


function Home() {
  return (
    <>
      <Head/>  
      <div className='home'>
        <Posts/>
        <Sidebar/>
      </div>
    </>
  )
}

export default Home