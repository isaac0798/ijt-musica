// spotify:playlist:5sIaxXN5RRQpmh2zKd8zxP
import Image from 'next/image'
// spotify:playlist:37i9dQZF1DZ06evO2oiloJ
//spotify:artist:45TgXXqMDdF8BkjA83OM7z
import { useRouter } from 'next/router';
import { win32 } from 'path';


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

const Playlist = ({playlistData}: IPlaylist) => {
  const router = useRouter();
  const {id} = router.query

  return (
    <main className='h-screen'>
        <div className='h-1/2 border border-dashed border-red-700 flex items-center justify-evenly'>
            <Image
                className={`rounded-2xl`}
                src={playlistData.image.url}
                height={350}
                width={350}
                alt="playlist image"
            />
            <div>
                <h1 className='text-3xl'>{playlistData.name}</h1>
                <h2 className='text-3xl'>{playlistData.description}</h2>
            </div>
        </div>
    </main>
  )
}

export default Playlist
