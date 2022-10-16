import type { NextComponentType, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '66ec3e99f0mshb514d6b2c37db99p166d41jsn622683dcbfe1',
    'X-RapidAPI-Host': 'spotify81.p.rapidapi.com',
  },
};

const hexToRGB = (hex: string, alpha: string) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  if (alpha) {
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

  return `rgb(${r}, ${g}, ${b})`;
}

interface IVisual {
  url: string;
  width?: Number;
  height?: Number;
}

type IArtist = {
  followers: number
  genres: Array<String>
  description: string
  id: string
  images: Array<IVisual>
  name: string,
  popularity: number,
  type: string,
  uri: string
}

interface IVisual {
  url: string;
  width?: Number;
  height?: Number;
}

interface IProfile {
  uri: string;
  name: string;
  visual_xl: IVisual;
  visual_s: IVisual;
}

interface IPlaylist {
  uri: string;
  name: string;
  description: string;
  image: IVisual;
  total_time: string
}

interface IAlbum {
  name: string;
  songs: Array<ISong>;
  cover: string;
}

interface ISong {
  name: string;
  length: string;
  listens: number;
}

interface IMonthlyListeners {
  rank: Number;
  artist: String;
  albums: Array<IAlbum>;
  monthlyListeners: Number;
  playlist: Array<IPlaylist>;
  profile: IProfile;
}

const getArtistData = async () => {
  const response = await fetch('http://localhost:3000/api/artist');

  const data = await response.json();

  return data;
}

interface IMonthlyListeners {
  rank: Number,
  artist: String,
  monthlyListeners: Number
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
      <main className='h-[80%] bg-[#1D2123] border border-red-600 border-dashed'>
        <article className='h-full flex'>
          <div
            id='sideMenu'
            className='h-full border border-green-600 border-dashed'
          >
            <div id='appNav'>app</div>
            <div id='personalNav'>personal</div>
          </div>
          <div className='w-full'>
            <div id='showbiz' className='flex h-1/2 w-full justify-between'>
              <div
                id='heroSection'
                className='w-1/2 flex items-center relative'
              >
                <div className='w-3/4 h-3/4 ml-5 flex items-center relative'>
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
              <div id='topChartSection' className='w-1/2'>
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
              className='flex flex-col h-1/2 justify-between text-white overflow-y-scroll space-y-10'
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
