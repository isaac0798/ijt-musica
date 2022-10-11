import type { NextComponentType, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react';

export const getStaticProps = async () => {
     const options = {
       method: 'GET',
       headers: {
         'X-RapidAPI-Key': '66ec3e99f0mshb514d6b2c37db99p166d41jsn622683dcbfe1',
         'X-RapidAPI-Host': 'spotify81.p.rapidapi.com',
       },
     };

     const response = await fetch(
       'https://spotify81.p.rapidapi.com/album_metadata?id=3IBcauSj5M2A6lTeffJzdv',
       options
     );

     const data = await response.json();

     console.log(data);

     return {props: {
        albumData: data
     }}
  }

interface albumProps {
  albumData: any
}

const Home: NextPage = (props: albumProps) => {
  const coverArtHeroSection = props.albumData.data.album.coverArt.sources[0];
  

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
          <div
            id='sideMenu'
            className='h-full border border-green-600 border-dashed'
          >
            <div id='appNav'>app</div>
            <div id='personalNav'>personal</div>
          </div>
          <div id='heroSection'>
            <Image src={coverArtHeroSection.url} alt='hero section' width={coverArtHeroSection.width} height={coverArtHeroSection.height} />
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
