import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    //header:- logo/ search bar
    <header className='h-1/6 bg-[#1D2123] border-red-500 border-dashed flex items-center'>
      <Image src='/logo.svg' alt='logo img' width={50} height={50} />
      <div className='grow'>search bar</div>
    </header>
    //sidebar
    //main
    // -- hero area
    // -- top charts area(global charts)
    // -- new releases
    // --popular in your area(uk charts)
  );
}

export default Home
