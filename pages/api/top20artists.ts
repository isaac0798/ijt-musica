// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { IMonthlyListeners, ISong } from '../../interfaces/interfaces';

const songs: Array<ISong> = [
  {
    name: 'Alone',
    duration_ms: 191158,
    listens: 124342134,
    image_url:
      'https://i.scdn.co/image/ab67616d000048518693303a558cd66d779d49f1',
    preview_url:
      'https://p.scdn.co/mp3-preview/236f099e364d05ad6e5801447cf160b1c2d58c47?cid=d8a5ed958d274c2e8ee717e6a4b0971d',
  },
  {
    name: "Home Ain't Home (feat. Rod Wave)",
    duration_ms: 191158,
    listens: 124342134,
    image_url:
      'https://i.scdn.co/image/ab67616d000048518040b02e84bbe74b846286e8',
    preview_url:
      'https://p.scdn.co/mp3-preview/236f099e364d05ad6e5801447cf160b1c2d58c47?cid=d8a5ed958d274c2e8ee717e6a4b0971d',
  },
  {
    name: 'Tombstone',
    duration_ms: 191158,
    listens: 124342134,
    image_url:
      'https://i.scdn.co/image/ab67616d00004851362c0f3c4a54d766eb7b654a',
    preview_url:
      'https://p.scdn.co/mp3-preview/236f099e364d05ad6e5801447cf160b1c2d58c47?cid=d8a5ed958d274c2e8ee717e6a4b0971d',
  },
  {
    name: 'Heart On Ice',
    duration_ms: 191158,
    listens: 124342134,
    image_url:
      'https://i.scdn.co/image/ab67616d00004851ae9b6f01afeeed8900cf8e06"',
    preview_url:
      'https://p.scdn.co/mp3-preview/236f099e364d05ad6e5801447cf160b1c2d58c47?cid=d8a5ed958d274c2e8ee717e6a4b0971d',
  },
  {
    name: 'Alone',
    duration_ms: 191158,
    listens: 124342134,
    image_url:
      'https://i.scdn.co/image/ab67616d000048518693303a558cd66d779d49f1',
    preview_url:
      'https://p.scdn.co/mp3-preview/236f099e364d05ad6e5801447cf160b1c2d58c47?cid=d8a5ed958d274c2e8ee717e6a4b0971d',
  },
];


export default function handler(req: NextApiRequest, res: NextApiResponse<Array<IMonthlyListeners>>) {
  res.status(200).json([
    {
      rank: 1,
      artist: 'Ed Sheeran',
      monthlyListeners: 78.15,
      albums: [
        {
          name: 'Beautiful Mind',
          cover:
            'https://i.scdn.co/image/ab67616d00001e028693303a558cd66d779d49f1',
          songs: [],
        },
      ],
      playlist: [
        {
          uri: 'spotify:playlist:37i9dQZF1DWWxPM4nWdhyI',
          name: 'This Is Ed Sheeran',
          description: 'All his biggest hits, in one place.',
          image: {
            url: 'https://i.scdn.co/image/ab67706f000000020373b03502fba84b91dac8e8',
          },
          total_time: '1:35:32',
          songs: songs,
        },
      ],
      profile: {
        uri: 'spotify:artist:6eUKZXaKkcviH0Ku9w2n3V',
        name: 'Ed Sheeran',
        visual_xl: {
          url: 'https://i.scdn.co/image/ab6761610000e5eb12a2ef08d00dd7451a6dbed6',
          width: 640,
          height: 640,
        },
        visual_s: {
          url: 'https://i.scdn.co/image/ab6761610000f17812a2ef08d00dd7451a6dbed6',
          width: 160,
          height: 160,
        },
      },
    },
    {
      rank: 2,
      artist: 'The Weeknd',
      monthlyListeners: 77.36,
      albums: [
        {
          name: 'SoulFly (Deluxe Version)',
          cover:
            'https://i.scdn.co/image/ab67616d00001e021234ddd76451088911b0d79f',
          songs: [],
        },
      ],
      playlist: [
        {
          uri: 'spotify:playlist:37i9dQZF1DWWxPM4nWdhyI',
          name: 'This Is The Weeknd',
          description: 'All his biggest hits, in one place.',
          image: {
            url: 'https://i.scdn.co/image/ab67706f0000000272da819e1e97d6e78e767567',
          },
          total_time: '1:35:32',
          songs,
        },
      ],
      profile: {
        uri: 'spotify:artist:6eUKZXaKkcviH0Ku9w2n3V',
        name: 'The Weeknd',
        visual_xl: {
          url: 'https://i.scdn.co/image/ab6761610000e5eb12a2ef08d00dd7451a6dbed6',
          width: 640,
          height: 640,
        },
        visual_s: {
          url: 'https://i.scdn.co/image/ab6761610000f17812a2ef08d00dd7451a6dbed6',
          width: 160,
          height: 160,
        },
      },
    },
    {
      rank: 3,
      artist: 'Justin Bieber',
      monthlyListeners: 69.62,
      albums: [
        {
          name: 'SoulFly',
          cover:
            'https://i.scdn.co/image/ab67616d00001e02362c0f3c4a54d766eb7b654a',
          songs: [],
        },
      ],
      playlist: [
        {
          uri: 'spotify:playlist:37i9dQZF1DWWxPM4nWdhyI',
          name: 'This Is Justin Bieber',
          description: 'All his biggest hits, in one place.',
          image: {
            url: 'https://i.scdn.co/image/ab67706c0000da84825f2007ce74e0ec41b1b330',
          },
          total_time: '1:35:32',
          songs
        },
      ],
      profile: {
        uri: 'spotify:artist:6eUKZXaKkcviH0Ku9w2n3V',
        name: 'Justin Bieber',
        visual_xl: {
          url: 'https://i.scdn.co/image/ab6761610000e5eb12a2ef08d00dd7451a6dbed6',
          width: 640,
          height: 640,
        },
        visual_s: {
          url: 'https://i.scdn.co/image/ab6761610000f17812a2ef08d00dd7451a6dbed6',
          width: 160,
          height: 160,
        },
      },
    },
    {
      rank: 4,
      artist: 'Harry Styles',
      monthlyListeners: 66.92,
      albums: [
        {
          name: 'Pray 4 Love (Deluxe)',
          cover:
            'https://i.scdn.co/image/ab67616d00001e02b3d45b74fdf99c9cc88497d3',
          songs: [],
        },
      ],
      playlist: [
        {
          uri: 'spotify:playlist:37i9dQZF1DWWxPM4nWdhyI',
          name: 'This Is Harry Styles',
          description: 'All his biggest hits, in one place.',
          image: {
            url: 'https://i.scdn.co/image/ab67706f000000020373b03502fba84b91dac8e8',
          },
          total_time: '1:35:32',
          songs
        },
      ],
      profile: {
        uri: 'spotify:artist:6eUKZXaKkcviH0Ku9w2n3V',
        name: 'Harry Styles',
        visual_xl: {
          url: 'https://i.scdn.co/image/ab6761610000e5eb12a2ef08d00dd7451a6dbed6',
          width: 640,
          height: 640,
        },
        visual_s: {
          url: 'https://i.scdn.co/image/ab6761610000f17812a2ef08d00dd7451a6dbed6',
          width: 160,
          height: 160,
        },
      },
    },
    {
      rank: 5,
      artist: 'David Guetta',
      monthlyListeners: 66.85,
      albums: [
        {
          name: 'Pray 4 Love',
          cover:
            'https://i.scdn.co/image/ab67616d00001e02759e4cc8e664b1d9e5c259cb',
          songs: [],
        },
      ],
      playlist: [
        {
          uri: 'spotify:playlist:37i9dQZF1DWWxPM4nWdhyI',
          name: 'This Is David Guetta',
          description: 'All his biggest hits, in one place.',
          image: {
            url: 'https://i.scdn.co/image/ab67706f000000020373b03502fba84b91dac8e8',
          },
          total_time: '1:35:32',
          songs
        },
      ],
      profile: {
        uri: 'spotify:artist:6eUKZXaKkcviH0Ku9w2n3V',
        name: 'David Guetta',
        visual_xl: {
          url: 'https://i.scdn.co/image/ab6761610000e5eb12a2ef08d00dd7451a6dbed6',
          width: 640,
          height: 640,
        },
        visual_s: {
          url: 'https://i.scdn.co/image/ab6761610000f17812a2ef08d00dd7451a6dbed6',
          width: 160,
          height: 160,
        },
      },
    },
    {
      rank: 6,
      artist: 'Bad Bunny',
      monthlyListeners: 63.91,
      albums: [
        {
          name: 'Ghetto Gospel',
          cover:
            'https://i.scdn.co/image/ab67616d00001e023391232da57e4827dac8aba5',
          songs: [],
        },
      ],
      playlist: [
        {
          uri: 'spotify:playlist:37i9dQZF1DWWxPM4nWdhyI',
          name: 'This Is Bad Bunny',
          description: 'All his biggest hits, in one place.',
          image: {
            url: 'https://i.scdn.co/image/ab67706f000000020373b03502fba84b91dac8e8',
          },
          total_time: '1:35:32',
          songs
        },
      ],
      profile: {
        uri: 'spotify:artist:6eUKZXaKkcviH0Ku9w2n3V',
        name: 'Bad Bunny',
        visual_xl: {
          url: 'https://i.scdn.co/image/ab6761610000e5eb12a2ef08d00dd7451a6dbed6',
          width: 640,
          height: 640,
        },
        visual_s: {
          url: 'https://i.scdn.co/image/ab6761610000f17812a2ef08d00dd7451a6dbed6',
          width: 160,
          height: 160,
        },
      },
    },
    {
      rank: 7,
      artist: 'Dua Lipa',
      monthlyListeners: 62.39,
      albums: [
        {
          name: 'PTSD',
          cover:
            'https://i.scdn.co/image/ab67616d00001e02ae9b6f01afeeed8900cf8e06',
          songs: [],
        },
      ],
      playlist: [
        {
          uri: 'spotify:playlist:37i9dQZF1DWWxPM4nWdhyI',
          name: 'This Is Dua Lipa',
          description: 'All his biggest hits, in one place.',
          image: {
            url: 'https://i.scdn.co/image/ab67706f000000020373b03502fba84b91dac8e8',
          },
          total_time: '1:35:32',
          songs
        },
      ],
      profile: {
        uri: 'spotify:artist:6eUKZXaKkcviH0Ku9w2n3V',
        name: 'Dua Lipa',
        visual_xl: {
          url: 'https://i.scdn.co/image/ab6761610000e5eb12a2ef08d00dd7451a6dbed6',
          width: 640,
          height: 640,
        },
        visual_s: {
          url: 'https://i.scdn.co/image/ab6761610000f17812a2ef08d00dd7451a6dbed6',
          width: 160,
          height: 160,
        },
      },
    },
    {
      rank: 8,
      artist: 'Drake (musician)',
      monthlyListeners: 60.92,
      albums: [
        {
          name: 'Hunger Games 3',
          cover:
            'https://i.scdn.co/image/ab67616d00001e0284d18d0e1341f11146ce268f',
          songs: [],
        },
      ],
      playlist: [
        {
          uri: 'spotify:playlist:37i9dQZF1DWWxPM4nWdhyI',
          name: 'This Is Drake',
          description: 'All his biggest hits, in one place.',
          image: {
            url: 'https://i.scdn.co/image/ab67706f000000020373b03502fba84b91dac8e8',
          },
          total_time: '1:35:32',
          songs
        },
      ],
      profile: {
        uri: 'spotify:artist:6eUKZXaKkcviH0Ku9w2n3V',
        name: 'Drake',
        visual_xl: {
          url: 'https://i.scdn.co/image/ab6761610000e5eb12a2ef08d00dd7451a6dbed6',
          width: 640,
          height: 640,
        },
        visual_s: {
          url: 'https://i.scdn.co/image/ab6761610000f17812a2ef08d00dd7451a6dbed6',
          width: 160,
          height: 160,
        },
      },
    },
    {
      rank: 9,
      artist: 'Taylor Swift',
      monthlyListeners: 58.08,
      albums: [
        {
          name: 'Hunger Games 2',
          cover:
            'https://i.scdn.co/image/ab67616d00001e025c4e9a4183952be3f4a27d9a',
          songs: [],
        },
      ],
      playlist: [
        {
          uri: 'spotify:playlist:37i9dQZF1DWWxPM4nWdhyI',
          name: 'This Is Taylor Swift',
          description: 'All his biggest hits, in one place.',
          image: {
            url: 'https://i.scdn.co/image/ab67616d00001e025c4e9a4183952be3f4a27d9a',
          },
          total_time: '1:35:32',
          songs
        },
      ],
      profile: {
        uri: 'spotify:artist:6eUKZXaKkcviH0Ku9w2n3V',
        name: 'Ed Sheeran',
        visual_xl: {
          url: 'https://i.scdn.co/image/ab6761610000e5eb12a2ef08d00dd7451a6dbed6',
          width: 640,
          height: 640,
        },
        visual_s: {
          url: 'https://i.scdn.co/image/ab6761610000f17812a2ef08d00dd7451a6dbed6',
          width: 160,
          height: 160,
        },
      },
    },
    {
      rank: 10,
      artist: 'Coldplay',
      monthlyListeners: 57.86,
      albums: [
        {
          name: 'Hunger Games 2',
          cover:
            'https://i.scdn.co/image/ab67616d000048515c4e9a4183952be3f4a27d9a',
          songs: [],
        },
      ],
      playlist: [
        {
          uri: 'spotify:playlist:37i9dQZF1DWWxPM4nWdhyI',
          name: 'This Is Coldplay',
          description: 'All his biggest hits, in one place.',
          image: {
            url: 'https://i.scdn.co/image/ab67706f000000020373b03502fba84b91dac8e8',
          },
          total_time: '1:35:32',
          songs
        },
      ],
      profile: {
        uri: 'spotify:artist:6eUKZXaKkcviH0Ku9w2n3V',
        name: 'Ed Sheeran',
        visual_xl: {
          url: 'https://i.scdn.co/image/ab6761610000e5eb12a2ef08d00dd7451a6dbed6',
          width: 640,
          height: 640,
        },
        visual_s: {
          url: 'https://i.scdn.co/image/ab6761610000f17812a2ef08d00dd7451a6dbed6',
          width: 160,
          height: 160,
        },
      },
    },
    {
      rank: 11,
      artist: 'Sam Smith',
      monthlyListeners: 56.74,
      albums: [
        {
          name: 'Hunger Games 2',
          cover:
            'https://i.scdn.co/image/ab67616d000048515c4e9a4183952be3f4a27d9a',
          songs: [],
        },
      ],
      playlist: [
        {
          uri: 'spotify:playlist:37i9dQZF1DWWxPM4nWdhyI',
          name: 'This Is Sam Smith',
          description: 'All his biggest hits, in one place.',
          image: {
            url: 'https://i.scdn.co/image/ab67706f000000020373b03502fba84b91dac8e8',
          },
          total_time: '1:35:32',
          songs
        },
      ],
      profile: {
        uri: 'spotify:artist:6eUKZXaKkcviH0Ku9w2n3V',
        name: 'Ed Sheeran',
        visual_xl: {
          url: 'https://i.scdn.co/image/ab6761610000e5eb12a2ef08d00dd7451a6dbed6',
          width: 640,
          height: 640,
        },
        visual_s: {
          url: 'https://i.scdn.co/image/ab6761610000f17812a2ef08d00dd7451a6dbed6',
          width: 160,
          height: 160,
        },
      },
    },
    {
      rank: 12,
      artist: 'Doja Cat',
      monthlyListeners: 53.93,
      albums: [
        {
          name: 'Hunger Games 2',
          cover:
            'https://i.scdn.co/image/ab67616d000048515c4e9a4183952be3f4a27d9a',
          songs: [],
        },
      ],
      playlist: [
        {
          uri: 'spotify:playlist:37i9dQZF1DWWxPM4nWdhyI',
          name: 'This Is Doja Cat',
          description: 'All his biggest hits, in one place.',
          image: {
            url: 'https://i.scdn.co/image/ab67706f000000020373b03502fba84b91dac8e8',
          },
          total_time: '1:35:32',
          songs
        },
      ],
      profile: {
        uri: 'spotify:artist:6eUKZXaKkcviH0Ku9w2n3V',
        name: 'Ed Sheeran',
        visual_xl: {
          url: 'https://i.scdn.co/image/ab6761610000e5eb12a2ef08d00dd7451a6dbed6',
          width: 640,
          height: 640,
        },
        visual_s: {
          url: 'https://i.scdn.co/image/ab6761610000f17812a2ef08d00dd7451a6dbed6',
          width: 160,
          height: 160,
        },
      },
    },
    {
      rank: 13,
      artist: 'Imagine Dragons',
      monthlyListeners: 53.7,
      albums: [
        {
          name: 'Hunger Games 2',
          cover:
            'https://i.scdn.co/image/ab67616d000048515c4e9a4183952be3f4a27d9a',
          songs: [],
        },
      ],
      playlist: [
        {
          uri: 'spotify:playlist:37i9dQZF1DWWxPM4nWdhyI',
          name: 'This Is Imagine Dragons',
          description: 'All his biggest hits, in one place.',
          image: {
            url: 'https://i.scdn.co/image/ab67706f000000020373b03502fba84b91dac8e8',
          },
          total_time: '1:35:32',
          songs
        },
      ],
      profile: {
        uri: 'spotify:artist:6eUKZXaKkcviH0Ku9w2n3V',
        name: 'Ed Sheeran',
        visual_xl: {
          url: 'https://i.scdn.co/image/ab6761610000e5eb12a2ef08d00dd7451a6dbed6',
          width: 640,
          height: 640,
        },
        visual_s: {
          url: 'https://i.scdn.co/image/ab6761610000f17812a2ef08d00dd7451a6dbed6',
          width: 160,
          height: 160,
        },
      },
    },
    {
      rank: 14,
      artist: 'Rihanna',
      monthlyListeners: 53.41,
      albums: [
        {
          name: 'Hunger Games 2',
          cover:
            'https://i.scdn.co/image/ab67616d000048515c4e9a4183952be3f4a27d9a',
          songs: [],
        },
      ],
      playlist: [
        {
          uri: 'spotify:playlist:37i9dQZF1DWWxPM4nWdhyI',
          name: 'This Is Rhianna',
          description: 'All his biggest hits, in one place.',
          image: {
            url: 'https://i.scdn.co/image/ab67706f000000020373b03502fba84b91dac8e8',
          },
          total_time: '1:35:32',
          songs
        },
      ],
      profile: {
        uri: 'spotify:artist:6eUKZXaKkcviH0Ku9w2n3V',
        name: 'Ed Sheeran',
        visual_xl: {
          url: 'https://i.scdn.co/image/ab6761610000e5eb12a2ef08d00dd7451a6dbed6',
          width: 640,
          height: 640,
        },
        visual_s: {
          url: 'https://i.scdn.co/image/ab6761610000f17812a2ef08d00dd7451a6dbed6',
          width: 160,
          height: 160,
        },
      },
    },
    {
      rank: 15,
      artist: 'Eminem',
      monthlyListeners: 53.35,
      albums: [
        {
          name: 'Hunger Games 2',
          cover:
            'https://i.scdn.co/image/ab67616d000048515c4e9a4183952be3f4a27d9a',
          songs: [],
        },
      ],
      playlist: [
        {
          uri: 'spotify:playlist:37i9dQZF1DWWxPM4nWdhyI',
          name: 'This Is Eminem',
          description: 'All his biggest hits, in one place.',
          image: {
            url: 'https://i.scdn.co/image/ab67706f000000020373b03502fba84b91dac8e8',
          },
          total_time: '1:35:32',
          songs
        },
      ],
      profile: {
        uri: 'spotify:artist:6eUKZXaKkcviH0Ku9w2n3V',
        name: 'Ed Sheeran',
        visual_xl: {
          url: 'https://i.scdn.co/image/ab6761610000e5eb12a2ef08d00dd7451a6dbed6',
          width: 640,
          height: 640,
        },
        visual_s: {
          url: 'https://i.scdn.co/image/ab6761610000f17812a2ef08d00dd7451a6dbed6',
          width: 160,
          height: 160,
        },
      },
    },
    {
      rank: 16,
      artist: 'Ariana Grande',
      monthlyListeners: 51.98,
      albums: [
        {
          name: 'Hunger Games 2',
          cover:
            'https://i.scdn.co/image/ab67616d000048515c4e9a4183952be3f4a27d9a',
          songs: [],
        },
      ],
      playlist: [
        {
          uri: 'spotify:playlist:37i9dQZF1DWWxPM4nWdhyI',
          name: 'This Is Ariana Grande',
          description: 'All his biggest hits, in one place.',
          image: {
            url: 'https://i.scdn.co/image/ab67706f000000020373b03502fba84b91dac8e8',
          },
          total_time: '1:35:32',
          songs
        },
      ],
      profile: {
        uri: 'spotify:artist:6eUKZXaKkcviH0Ku9w2n3V',
        name: 'Ed Sheeran',
        visual_xl: {
          url: 'https://i.scdn.co/image/ab6761610000e5eb12a2ef08d00dd7451a6dbed6',
          width: 640,
          height: 640,
        },
        visual_s: {
          url: 'https://i.scdn.co/image/ab6761610000f17812a2ef08d00dd7451a6dbed6',
          width: 160,
          height: 160,
        },
      },
    },
    {
      rank: 17,
      artist: 'Post Malone',
      monthlyListeners: 51.78,
      albums: [
        {
          name: 'Hunger Games 2',
          cover:
            'https://i.scdn.co/image/ab67616d000048515c4e9a4183952be3f4a27d9a',
          songs: [],
        },
      ],
      playlist: [
        {
          uri: 'spotify:playlist:37i9dQZF1DWWxPM4nWdhyI',
          name: 'This Is Post Malone',
          description: 'All his biggest hits, in one place.',
          image: {
            url: 'https://i.scdn.co/image/ab67706f000000020373b03502fba84b91dac8e8',
          },
          total_time: '1:35:32',
          songs
        },
      ],
      profile: {
        uri: 'spotify:artist:6eUKZXaKkcviH0Ku9w2n3V',
        name: 'Ed Sheeran',
        visual_xl: {
          url: 'https://i.scdn.co/image/ab6761610000e5eb12a2ef08d00dd7451a6dbed6',
          width: 640,
          height: 640,
        },
        visual_s: {
          url: 'https://i.scdn.co/image/ab6761610000f17812a2ef08d00dd7451a6dbed6',
          width: 160,
          height: 160,
        },
      },
    },
    {
      rank: 18,
      artist: 'Elton John',
      monthlyListeners: 51.53,
      albums: [
        {
          name: 'Hunger Games 2',
          cover:
            'https://i.scdn.co/image/ab67616d000048515c4e9a4183952be3f4a27d9a',
          songs: [],
        },
      ],
      playlist: [
        {
          uri: 'spotify:playlist:37i9dQZF1DWWxPM4nWdhyI',
          name: 'This Is Elton John',
          description: 'All his biggest hits, in one place.',
          image: {
            url: 'https://i.scdn.co/image/ab67706f000000020373b03502fba84b91dac8e8',
          },
          total_time: '1:35:32',
          songs
        },
      ],
      profile: {
        uri: 'spotify:artist:6eUKZXaKkcviH0Ku9w2n3V',
        name: 'Ed Sheeran',
        visual_xl: {
          url: 'https://i.scdn.co/image/ab6761610000e5eb12a2ef08d00dd7451a6dbed6',
          width: 640,
          height: 640,
        },
        visual_s: {
          url: 'https://i.scdn.co/image/ab6761610000f17812a2ef08d00dd7451a6dbed6',
          width: 160,
          height: 160,
        },
      },
    },
    {
      rank: 19,
      artist: 'Kanye West',
      monthlyListeners: 50.98,
      albums: [
        {
          name: 'Hunger Games 2',
          cover:
            'https://i.scdn.co/image/ab67616d000048515c4e9a4183952be3f4a27d9a',
          songs: [],
        },
      ],
      playlist: [
        {
          uri: 'spotify:playlist:37i9dQZF1DWWxPM4nWdhyI',
          name: 'This Is Kanye West',
          description: 'All his biggest hits, in one place.',
          image: {
            url: 'https://i.scdn.co/image/ab67706f000000020373b03502fba84b91dac8e8',
          },
          total_time: '1:35:32',
          songs
        },
      ],
      profile: {
        uri: 'spotify:artist:6eUKZXaKkcviH0Ku9w2n3V',
        name: 'Ed Sheeran',
        visual_xl: {
          url: 'https://i.scdn.co/image/ab6761610000e5eb12a2ef08d00dd7451a6dbed6',
          width: 640,
          height: 640,
        },
        visual_s: {
          url: 'https://i.scdn.co/image/ab6761610000f17812a2ef08d00dd7451a6dbed6',
          width: 160,
          height: 160,
        },
      },
    },
    {
      rank: 20,
      artist: 'Calvin Harris',
      monthlyListeners: 50.7,
      albums: [
        {
          name: 'Hunger Games 2',
          cover:
            'https://i.scdn.co/image/ab67616d000048515c4e9a4183952be3f4a27d9a',
          songs: [],
        },
      ],
      playlist: [
        {
          uri: 'spotify:playlist:37i9dQZF1DWWxPM4nWdhyI',
          name: 'This Is Calvin Harris',
          description: 'All his biggest hits, in one place.',
          image: {
            url: 'https://i.scdn.co/image/ab67706f000000020373b03502fba84b91dac8e8',
          },
          total_time: '1:35:32',
          songs
        },
      ],
      profile: {
        uri: 'spotify:artist:6eUKZXaKkcviH0Ku9w2n3V',
        name: 'Ed Sheeran',
        visual_xl: {
          url: 'https://i.scdn.co/image/ab6761610000e5eb12a2ef08d00dd7451a6dbed6',
          width: 640,
          height: 640,
        },
        visual_s: {
          url: 'https://i.scdn.co/image/ab6761610000f17812a2ef08d00dd7451a6dbed6',
          width: 160,
          height: 160,
        },
      },
    },
  ]);
}
