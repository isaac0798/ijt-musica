// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

interface IVisual {
  url: String;
  width?: Number;
  height?: Number;
}

type IArtist = {
  followers: Number
  genres: Array<String>
  description: string
  id: string
  images: Array<IVisual>
  name: string,
  popularity: number,
  type: string,
  uri: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Array<IArtist>>
) {
  res.status(200).json([
    {
      followers: 3742652,
      description: `Blessed with a special singing voice, and the knowledge of how best to use it, Florida's Rod Wave is taking his own path to the top of the game.`,
      genres: ['Florida Rap'],
      id: '45TgXXqMDdF8BkjA83OM7z',
      images: [
        {
          height: 640,
          url: 'https://i.scdn.co/image/ab67618600001016db4f70f515ee9a9e4b6b8155',
          width: 640,
        },
        {
          height: 320,
          url: 'https://i.scdn.co/image/ab67618600001016db4f70f515ee9a9e4b6b8155',
          width: 320,
        },
        {
          height: 160,
          url: 'https://i.scdn.co/image/ab67618600001016db4f70f515ee9a9e4b6b8155',
          width: 160,
        },
      ],
      name: 'Rod Wave',
      popularity: 79,
      type: 'artist',
      uri: 'spotify:artist:45TgXXqMDdF8BkjA83OM7z',
    },
  ]);
}
