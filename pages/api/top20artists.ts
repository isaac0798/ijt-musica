// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

interface IVisual {
  url: String
  width?: Number
  height?: Number
}

interface IProfile {
  uri: string
  name: string
  visual_xl: IVisual
  visual_s: IVisual
}

interface IPlaylist {
  uri: string
  name: string
  description: string
  image: IVisual,
  total_time: string
}

interface IMonthlyListeners {
  rank: Number;
  artist: String;
  monthlyListeners: Number;
  playlist: Array<IPlaylist>;
  profile: IProfile;
}


export default function handler(req: NextApiRequest, res: NextApiResponse<Array<IMonthlyListeners>>) {
  res.status(200).json([
    {
      rank: 1,
      artist: 'Ed Sheeran',
      monthlyListeners: 78.15,
      playlist: [
        {
          uri: 'spotify:playlist:37i9dQZF1DWWxPM4nWdhyI',
          name: 'This Is Ed Sheeran',
          description: 'All his biggest hits, in one place.',
          image: {
            url: 'https://i.scdn.co/image/ab67706f000000020373b03502fba84b91dac8e8',
          },
          total_time: '1:35:32',
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
      playlist: [
        {
          uri: 'spotify:playlist:37i9dQZF1DWWxPM4nWdhyI',
          name: 'This Is The Weeknd',
          description: 'All his biggest hits, in one place.',
          image: {
            url: 'https://i.scdn.co/image/ab67706f000000020373b03502fba84b91dac8e8',
          },
          total_time: '1:35:32',
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
      rank: 3,
      artist: 'Justin Bieber',
      monthlyListeners: 69.62,
      playlist: [
        {
          uri: 'spotify:playlist:37i9dQZF1DWWxPM4nWdhyI',
          name: 'This Is Justin Bieber',
          description: 'All his biggest hits, in one place.',
          image: {
            url: 'https://i.scdn.co/image/ab67706f000000020373b03502fba84b91dac8e8',
          },
          total_time: '1:35:32',
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
      rank: 4,
      artist: 'Harry Styles',
      monthlyListeners: 66.92,
      playlist: [
        {
          uri: 'spotify:playlist:37i9dQZF1DWWxPM4nWdhyI',
          name: 'This Is Harry Styles',
          description: 'All his biggest hits, in one place.',
          image: {
            url: 'https://i.scdn.co/image/ab67706f000000020373b03502fba84b91dac8e8',
          },
          total_time: '1:35:32',
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
      rank: 5,
      artist: 'David Guetta',
      monthlyListeners: 66.85,
      playlist: [
        {
          uri: 'spotify:playlist:37i9dQZF1DWWxPM4nWdhyI',
          name: 'This Is David Guetta',
          description: 'All his biggest hits, in one place.',
          image: {
            url: 'https://i.scdn.co/image/ab67706f000000020373b03502fba84b91dac8e8',
          },
          total_time: '1:35:32',
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
      rank: 6,
      artist: 'Bad Bunny',
      monthlyListeners: 63.91,
      playlist: [
        {
          uri: 'spotify:playlist:37i9dQZF1DWWxPM4nWdhyI',
          name: 'This Is Bad Bunny',
          description: 'All his biggest hits, in one place.',
          image: {
            url: 'https://i.scdn.co/image/ab67706f000000020373b03502fba84b91dac8e8',
          },
          total_time: '1:35:32',
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
      rank: 7,
      artist: 'Dua Lipa',
      monthlyListeners: 62.39,
      playlist: [
        {
          uri: 'spotify:playlist:37i9dQZF1DWWxPM4nWdhyI',
          name: 'This Is Dua Lipa',
          description: 'All his biggest hits, in one place.',
          image: {
            url: 'https://i.scdn.co/image/ab67706f000000020373b03502fba84b91dac8e8',
          },
          total_time: '1:35:32',
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
      rank: 8,
      artist: 'Drake (musician)',
      monthlyListeners: 60.92,
      playlist: [
        {
          uri: 'spotify:playlist:37i9dQZF1DWWxPM4nWdhyI',
          name: 'This Is Drake',
          description: 'All his biggest hits, in one place.',
          image: {
            url: 'https://i.scdn.co/image/ab67706f000000020373b03502fba84b91dac8e8',
          },
          total_time: '1:35:32',
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
      rank: 9,
      artist: 'Taylor Swift',
      monthlyListeners: 58.08,
      playlist: [
        {
          uri: 'spotify:playlist:37i9dQZF1DWWxPM4nWdhyI',
          name: 'This Is Taylor Swift',
          description: 'All his biggest hits, in one place.',
          image: {
            url: 'https://i.scdn.co/image/ab67706f000000020373b03502fba84b91dac8e8',
          },
          total_time: '1:35:32',
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
      playlist: [
        {
          uri: 'spotify:playlist:37i9dQZF1DWWxPM4nWdhyI',
          name: 'This Is Coldplay',
          description: 'All his biggest hits, in one place.',
          image: {
            url: 'https://i.scdn.co/image/ab67706f000000020373b03502fba84b91dac8e8',
          },
          total_time: '1:35:32',
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
      playlist: [
        {
          uri: 'spotify:playlist:37i9dQZF1DWWxPM4nWdhyI',
          name: 'This Is Sam Smith',
          description: 'All his biggest hits, in one place.',
          image: {
            url: 'https://i.scdn.co/image/ab67706f000000020373b03502fba84b91dac8e8',
          },
          total_time: '1:35:32',
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
      playlist: [
        {
          uri: 'spotify:playlist:37i9dQZF1DWWxPM4nWdhyI',
          name: 'This Is Doja Cat',
          description: 'All his biggest hits, in one place.',
          image: {
            url: 'https://i.scdn.co/image/ab67706f000000020373b03502fba84b91dac8e8',
          },
          total_time: '1:35:32',
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
      playlist: [
        {
          uri: 'spotify:playlist:37i9dQZF1DWWxPM4nWdhyI',
          name: 'This Is Imagine Dragons',
          description: 'All his biggest hits, in one place.',
          image: {
            url: 'https://i.scdn.co/image/ab67706f000000020373b03502fba84b91dac8e8',
          },
          total_time: '1:35:32',
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
      playlist: [
        {
          uri: 'spotify:playlist:37i9dQZF1DWWxPM4nWdhyI',
          name: 'This Is Rhianna',
          description: 'All his biggest hits, in one place.',
          image: {
            url: 'https://i.scdn.co/image/ab67706f000000020373b03502fba84b91dac8e8',
          },
          total_time: '1:35:32',
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
      playlist: [
        {
          uri: 'spotify:playlist:37i9dQZF1DWWxPM4nWdhyI',
          name: 'This Is Eminem',
          description: 'All his biggest hits, in one place.',
          image: {
            url: 'https://i.scdn.co/image/ab67706f000000020373b03502fba84b91dac8e8',
          },
          total_time: '1:35:32',
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
      playlist: [
        {
          uri: 'spotify:playlist:37i9dQZF1DWWxPM4nWdhyI',
          name: 'This Is Ariana Grande',
          description: 'All his biggest hits, in one place.',
          image: {
            url: 'https://i.scdn.co/image/ab67706f000000020373b03502fba84b91dac8e8',
          },
          total_time: '1:35:32',
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
      playlist: [
        {
          uri: 'spotify:playlist:37i9dQZF1DWWxPM4nWdhyI',
          name: 'This Is Post Malone',
          description: 'All his biggest hits, in one place.',
          image: {
            url: 'https://i.scdn.co/image/ab67706f000000020373b03502fba84b91dac8e8',
          },
          total_time: '1:35:32',
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
      playlist: [
        {
          uri: 'spotify:playlist:37i9dQZF1DWWxPM4nWdhyI',
          name: 'This Is Elton John',
          description: 'All his biggest hits, in one place.',
          image: {
            url: 'https://i.scdn.co/image/ab67706f000000020373b03502fba84b91dac8e8',
          },
          total_time: '1:35:32',
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
      playlist: [
        {
          uri: 'spotify:playlist:37i9dQZF1DWWxPM4nWdhyI',
          name: 'This Is Kanye West',
          description: 'All his biggest hits, in one place.',
          image: {
            url: 'https://i.scdn.co/image/ab67706f000000020373b03502fba84b91dac8e8',
          },
          total_time: '1:35:32',
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
      playlist: [
        {
          uri: 'spotify:playlist:37i9dQZF1DWWxPM4nWdhyI',
          name: 'This Is Calvin Harris',
          description: 'All his biggest hits, in one place.',
          image: {
            url: 'https://i.scdn.co/image/ab67706f000000020373b03502fba84b91dac8e8',
          },
          total_time: '1:35:32',
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
