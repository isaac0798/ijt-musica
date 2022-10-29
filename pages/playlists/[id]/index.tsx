// spotify:playlist:5sIaxXN5RRQpmh2zKd8zxP
import { NextComponentType } from 'next';
import Image from 'next/image'
// spotify:playlist:37i9dQZF1DZ06evO2oiloJ
//spotify:artist:45TgXXqMDdF8BkjA83OM7z
import { useRouter } from 'next/router';
import { IPlaylist } from '../../../interfaces/interfaces';

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
};

const getPlaylistData = async (id) => {
  const response = await fetch(`http://localhost:3000/api/playlists/${id}`);

  const data = await response.json();

  return data;
}

export const getServerSideProps = async (context) => {
     const {id} = context.query
     const playlistData = await getPlaylistData(id);
     return {
       props: {
         playlistData,
       },
     };
  }

interface IProps {
    playlistData: IPlaylist
}

const Playlist = ({playlistData}: IProps) => {
  console.log(playlistData)
  const songList = playlistData.songs.map((song, i) => {
    const date = new Date(song.duration_ms);
  
    return (
      <li
        className='flex text-white items-center justify-evenly w-4/5 bg-[#313639] rounded-2xl'
        key={i}
      >
        <Image
          className='rounded'
          src={song.image_url}
          width={50}
          height={50}
          alt='song image'
        />
        <p className='w-1/5'>{song.name}</p>
        <p className='w-1/5'>{song.artist_name}</p>
        <p className='w-1/5'>{song.album}</p>
        <p>
          {date.getMinutes()}:{date.getSeconds()}
        </p>
      </li>
    );
  })

  return (
    <div className='h-screen'>
      <Header />
      <main className='h-[80%]'>
        {/*         <div
          id='sideMenu'
          className='h-full border border-green-600 border-dashed'
        >
          <div id='appNav'>app</div>
          <div id='personalNav'>personal</div>
        </div> */}
        <Image
          className={`rounded-2xl opacity-25`}
          src={playlistData.image.url}
          layout='fill'
          alt='playlist image'
        />
        <div className='h-1/2 w-full flex items-center justify-evenly relative'>
          <div className='flex items-center justify-center w-1/3'>
            <Image
              className={`rounded-2xl`}
              src={playlistData.image.url}
              height={350}
              width={350}
              alt='playlist image'
            />
          </div>
          <div className='h-full grow flex flex-col'>
            <div className='h-1/3'></div>
            <div className='h-1/2 flex flex-col justify-evenly'>
              <h1 className='font-bold text-3xl text-[#A4C7C6]'>
                {playlistData.name}
              </h1>
              <h2 className='text-[#EFEEE0]'>{playlistData.description}</h2>
              <div className='flex'>
                <p className='text-[#EFEEE0]'>
                  {playlistData.songs.length} songs
                </p>
                <p className='text-[#EFEEE0]'>~ </p>
                <p className='text-[#EFEEE0]'>{playlistData.total_time}</p>
              </div>
              <div className='flex flex-row w-2/5 justify-between'>
                <button className='rounded-lg bg-[#313639] w-fit px-2 backdrop-blur'>
                  Play All
                </button>
                <button className='rounded-lg bg-[#313639] w-fit px-2 backdrop-blur'>
                  Add to Collection
                </button>
                <button className='rounded-lg bg-[#313639] w-fit px-2 backdrop-blur'>
                  like button
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='h-1/2 w-full flex justify-center items-center'>
          <ul className='h-full w-full flex flex-col justify-evenly items-center'>
            {songList}
          </ul>
        </div>
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
            <div className='w-1/2 h-1/6 bg-[#FACD66] rounded-full border'></div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Playlist
