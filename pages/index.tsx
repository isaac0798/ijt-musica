import type { NextComponentType, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import React from 'react';
import { IArtist, IMonthlyListeners } from '../interfaces/interfaces';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '66ec3e99f0mshb514d6b2c37db99p166d41jsn622683dcbfe1',
    'X-RapidAPI-Host': 'spotify81.p.rapidapi.com',
  },
};

const getArtistData = async () => {
  const response = await fetch('http://localhost:3000/api/artist');

  const data = await response.json();

  return data;
}

const getTop20ArtistsPlaylists = async () => {
  const top20Response = await fetch(
    'http://localhost:3000/api/top20artists'
  );

  // [{rank: number, artist: string, monthlyListeners: number}]
  //get artist details
  return await top20Response.json();
}

export const getStaticProps = async () => {
     const artistData = await getArtistData();
     const top20ArtistsData = await getTop20ArtistsPlaylists();
     return {
       props: {
         artistData: artistData,
         top20ArtistsData: top20ArtistsData,
       },
     };
  }

interface IProps {
  artistData: Array<IArtist>;
  top20ArtistsData: Array<IMonthlyListeners>;
}

const Home: NextPage = (props: IProps) => {
  const coverArtHeroSection = props.artistData[0].images[0].url;
  const listItems = props.top20ArtistsData.slice(0, 3).map((artist) => (
    <li key={artist.rank} className='text-white w-full'>
      <Link href={'http://localhost:3000/playlists/3'}>
        <div className='flex w-full bg-[#1A1E1F] rounded-2xl'>
          <Image
            className={`rounded-2xl`}
            src={artist.playlist[0].image.url}
            alt='playlist pic'
            width={75}
            height={75}
          />
          <div className='w-2/3 flex justify-evenly grow'>
            <div className='flex flex-col justify-center'>
              <p className='text-sm'>{artist.playlist[0].name}</p>
              <p className='opacity-50 text-xs'>{artist.artist}</p>
              <p className='text-sm'>{artist.playlist[0].total_time}</p>
            </div>
            <Image src='/Stroke-1.svg' alt='like button' width={15} height={15} />
          </div>
        </div>
      </Link>
    </li>
  ));

  const newReleases = props.top20ArtistsData.map((artist) => (
    <li
      key={artist.rank}
      className='text-white w-max shrink-0 flex flex-col h-1/12'
    >
      <div>
        <Image
          className={`rounded-2xl`}
          src={artist.albums[0].cover}
          alt='album pic'
          width={150}
          height={150}
        />
        <div>
          <p className='overflow-hidden'>{artist.albums[0].name}</p>
          <p className='opacity-50'>{artist.profile.name}</p>
        </div>
      </div>
    </li>
  ));

  return (
    <div className='h-screen'>
      <Header />
      <main className='h-[80%] bg-[#1D2123]relative'>
        <article className='h-full flex'>
          <div
            id='sideMenu'
            className='h-full border border-green-600 border-dashed'
          >
            <div id='appNav'>app</div>
            <div id='personalNav'>personal</div>
          </div>
          <div className='w-full'>
            <div id='showbiz' className='flex h-1/2 w-full justify-evenly'>
              <div
                id='heroSection'
                className='w-3/4 flex items-center relative'
              >
                <div className='w-4/5 h-4/5 ml-5 flex items-center relative'>
                  <Image
                    className={`rounded-2xl w-full opacity-70`}
                    src={coverArtHeroSection}
                    alt='hero section'
                    layout='fill'
                    objectFit='fill'
                  />
                  <div className='flex flex-col h-4/5 justify-around ml-5'>
                    <h1 className='text-white text-5xl z-10'>
                      {props.artistData[0].name}
                    </h1>
                    <div className='text-white text-2xl z-10'>
                      {props.artistData[0].genres[0]}
                    </div>
                    <div className='text-white text-sm z-10'>
                      {props.artistData[0].description}
                    </div>
                    <div className='flex items-center w-fit justify-between'>
                      <Image
                        src={'/followers.svg'}
                        alt='followers'
                        width={50}
                        height={50}
                      />
                      <div className='text-white text-sm z-10 ml-3'>
                        {`${Intl.NumberFormat('en-US', {
                          notation: 'compact',
                          maximumFractionDigits: 1,
                        }).format(props.artistData[0].followers)} followers`}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id='topChartSection' className='w-2/3'>
                <div className='flex flex-col h-full ml-5 justify-between'>
                  <h1 className='text-white text-2xl font-extrabold'>
                    Top Charts
                  </h1>
                  <ul className='flex flex-col justify-evenly items-center h-full w-3/4'>
                    {listItems}
                  </ul>
                </div>
              </div>
            </div>
            <div
              id='albumBiz'
              className='flex flex-col h-2/3 justify-between text-white overflow-scroll space-y-10'
            >
              <div>
                <div className='ml-5'>New Releases</div>
                <ul className='flex overflow-y-auto space-x-5 ml-5'>
                  {newReleases}
                </ul>
              </div>
              <div>
                <div className='ml-5'>Popular in your area</div>
                <ul className='flex overflow-y-auto space-x-5 ml-5'>
                  {newReleases}
                </ul>
              </div>
            </div>
          </div>
        </article>
      </main>
      <footer
        id='musicPlayer'
        className='h-[10%] w-full border border-purple-600 border-dashed bg-transparent z-10 fixed backdrop-blur flex items-center text-white'
      >
        <div className='w-1/5 flex justify-evenly'>
          <Image
            className={'rounded-2xl'}
            src={
              'https://i.scdn.co/image/ab67616d00004851f4ba54b7753ad4c5f2924e53'
            }
            alt='album cover'
            height={66}
            width={66}
          />
          <div className='flex flex-col justify-center'>
            <p className='text-sm'>Forever Set In Stone</p>
            <p className='text-xs opacity-50'>Rod Wave</p>
          </div>
        </div>
        <div className='w-3/5 h-full flex flex-col items-center justify-center'>
          <div
            id='musicControl'
            className='flex w-1/3 h-1/2 justify-between items-center'
          >
            <div>
              <Image
                src={'/shuffle.svg'}
                alt='album cover'
                height={15}
                width={15}
              />
            </div>
            <div>
              <Image
                src={'/previous.svg'}
                alt='album cover'
                height={15}
                width={15}
              />
            </div>
            <div>
              <Image
                src={'/playbutton.svg'}
                alt='album cover'
                height={50}
                width={50}
              />
            </div>
            <div>
              <Image
                src={'/next.svg'}
                alt='album cover'
                height={15}
                width={15}
              />
            </div>
            <div>
              <Image
                src={'/repeate-one.svg'}
                alt='album cover'
                height={15}
                width={15}
              />
            </div>
          </div>
          <div id='playbar' className='h-1/2 w-4/5 flex items-center'>
            <div
              id='myBar'
              className='w-[100%] h-1/6 bg-[#FACD66] rounded-full border'
            ></div>
          </div>
        </div>
        <div id='volumeBar' className='w-1/5'>
          <div className='h-1/2 w-4/5 flex items-center justify-evenly'>
            <Image 
              src={'/volume-high.svg'}
              alt='volume bar'
              width={20}
              height={20}
            />
            <div
              className='w-1/2 h-1/6 bg-[#FACD66] rounded-full border'
            ></div>
          </div>
        </div>
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
