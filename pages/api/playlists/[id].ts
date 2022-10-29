import type { NextApiRequest, NextApiResponse } from 'next'
import { IPlaylist, ISong } from '../../../interfaces/interfaces'


const songs: Array<ISong> = [
  {
    name: 'Alone',
    artist_name: 'Rod Wave',
    album: 'Beautiful Mind',
    duration_ms: 191158,
    listens: 124342134,
    image_url:
      'https://i.scdn.co/image/ab67616d000048518693303a558cd66d779d49f1',
    preview_url:
      'https://p.scdn.co/mp3-preview/236f099e364d05ad6e5801447cf160b1c2d58c47?cid=d8a5ed958d274c2e8ee717e6a4b0971d',
  },
  {
    name: "Home (ft. Rod Wave)",
    artist_name: 'NBA Youngboy',
    album: "Home",
    duration_ms: 191158,
    listens: 124342134,
    image_url:
      'https://i.scdn.co/image/ab67616d000048518040b02e84bbe74b846286e8',
    preview_url:
      'https://p.scdn.co/mp3-preview/236f099e364d05ad6e5801447cf160b1c2d58c47?cid=d8a5ed958d274c2e8ee717e6a4b0971d',
  },
  {
    name: 'Tombstone',
    artist_name: 'Rod Wave',
    album: 'SoulFly',
    duration_ms: 191158,
    listens: 124342134,
    image_url:
      'https://i.scdn.co/image/ab67616d00004851362c0f3c4a54d766eb7b654a',
    preview_url:
      'https://p.scdn.co/mp3-preview/236f099e364d05ad6e5801447cf160b1c2d58c47?cid=d8a5ed958d274c2e8ee717e6a4b0971d',
  },
  {
    name: 'Heart On Ice',
    artist_name: 'Rod Wave',
    album: 'PTSD',
    duration_ms: 191158,
    listens: 124342134,
    image_url:
      'https://i.scdn.co/image/ab67616d00004851ae9b6f01afeeed8900cf8e06',
    preview_url:
      'https://p.scdn.co/mp3-preview/236f099e364d05ad6e5801447cf160b1c2d58c47?cid=d8a5ed958d274c2e8ee717e6a4b0971d',
  }
];


interface IPlaylistResult {
    [id: number]: IPlaylist
}

const playlists: IPlaylistResult = {
    1: {
      uri: 'spotify:playlist:37i9dQZF1DWWxPM4nWdhyI',
      name: 'This Is Ed Sheeran',
      description: 'All his biggest hits, in one place.',
      image: {
        url: 'https://i.scdn.co/image/ab67706f000000020373b03502fba84b91dac8e8',
      },
      total_time: '1:35:32',
      songs: songs,
    },
    2: {
      uri: 'spotify:playlist:37i9dQZF1DWWxPM4nWdhyI',
      name: 'This Is The Weeknd',
      description: 'All his biggest hits, in one place.',
      image: {
        url: 'https://i.scdn.co/image/ab67706f0000000272da819e1e97d6e78e767567',
      },
      total_time: '1:35:32',
      songs,
    },
    3: {
      uri: 'spotify:playlist:37i9dQZF1DWWxPM4nWdhyI',
      name: 'This Is Justin Bieber',
      description: 'All his biggest hits, in one place.',
      image: {
        url: 'https://i.scdn.co/image/ab67706c0000da84825f2007ce74e0ec41b1b330',
      },
      total_time: '1:35:32',
      songs
    },
  }

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IPlaylist>
) {
  const { id } = req.query;

  if (!id) {
      return
  }

  if (Number(id) in playlists) {
      res.status(200).json(playlists[Number(id)])
  }

  return
}
