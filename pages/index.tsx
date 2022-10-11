import type { NextComponentType, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react';

const Home: NextPage = () => {
  return (
    //header:- logo/ search bar
    //sidebar
    //main
    // -- hero area // -- top charts area(global charts) //
    //  -- new releases // --popular in your area(uk charts)
    <div className='h-screen'>
      <Header />
      <main className='h-[80%] border border-red-600 border-dashed'>
        <article className='h-full flex'>
          <div id='sideMenu' className='h-full border border-green-600 border-dashed'>
            <div id='appNav'>app</div>
            <div id='personalNav'>personal</div>
          </div>
          <div id='heroSection'>
           {/*  <Image src='/HeroSection.png' alt='hero section' width={500} height={500} /> */}
          </div>
          <div id='topChartSection'>Chart section</div>
        </article>
      </main>
      <footer className='h-[10%] border border-purple-600 border-dashed'>
        footer
      </footer>
    </div>
  );
}

const Header: NextComponentType = () => {
  return (
    <header className='h-[10%] bg-[#1D2123] border border-yellow-500 border-dashed flex items-center'>
      <Image src='/logo.svg' alt='logo img' width={50} height={50} />
      <div className='h-max flex items-center grow'>
        <Image src='/search.png' alt='logo img' width={20} height={20} />
        <input className='ml-5' placeholder='search artist'></input>
      </div>
    </header>
  );
}

export default Home
