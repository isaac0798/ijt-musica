import type { NextComponentType, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react';

const hexToRGB = (hex: string, alpha: string) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  if (alpha) {
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

  return `rgb(${r}, ${g}, ${b})`;
}

const getArtistData = async () => {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '66ec3e99f0mshb514d6b2c37db99p166d41jsn622683dcbfe1',
      'X-RapidAPI-Host': 'spotify81.p.rapidapi.com',
    },
  };

  const response = await fetch(
    'https://spotify81.p.rapidapi.com/artist_overview?id=2w9zwq3AktTeYYMuhMjju8',
    options
  );

  const data = await response.json();
  const {data :{artist}} = data;

  return artist;
}

export const getStaticProps = async () => {
     const artistData = await getArtistData();
     return {props: {
        artistData: artistData
     }}
  }

interface IProps {
  artistData: any
}

const Home: NextPage = (props: IProps) => {
  console.log(props.artistData);
  const coverArtHeroSection = props.artistData.visuals.headerImage.sources[0];
  const shadowColor = hexToRGB(
    props.artistData.visuals.headerImage.extractedColors.colorRaw.hex,
    '1'
  );
  console.log(shadowColor)
  //shadow-[0_35px_60px_-15px_${shadowColor}]

  return (
    //header:- logo/ search bar
    //sidebar
    //main
    // -- hero area // -- top charts area(global charts) //
    //  -- new releases // --popular in your area(uk charts)
    <div className='h-screen'>
      <Header />
      <main className='h-[80%] bg-[#1D2123] border border-red-600 border-dashed'>
        <article className='h-full flex'>
          <div
            id='sideMenu'
            className='h-full border border-green-600 border-dashed'
          >
            <div id='appNav'>app</div>
            <div id='personalNav'>personal</div>
          </div>
          <div id='showbiz' className='flex h-1/2 w-full justify-between'>
            <div
              id='heroSection'
              className='w-1/2 border border-orange-500 border-dashed flex items-center justify-center'
            >
              <Image
                className={`rounded-2xl`}
                src={coverArtHeroSection.url}
                alt='hero section'
                width={700}
                height={350}
              />
            </div>
            <div
              id='topChartSection'
              className='w-1/2 border border-cyan-500 border-dashed'
            >
              Chart section
            </div>
          </div>
        </article>
      </main>
      <footer className='h-[10%] bg-[#1D2123] border border-purple-600 border-dashed'>
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
