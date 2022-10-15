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
        genres: ['florida rap'],
        id: '45TgXXqMDdF8BkjA83OM7z',
        images: [
          {
            height: 640,
            url: 'https://i.scdn.co/image/ab6761610000e5eb69dc893d0ea9e44a34f97cc9',
            width: 640,
          },
          {
            height: 320,
            url: 'https://i.scdn.co/image/ab6761610000517469dc893d0ea9e44a34f97cc9',
            width: 320,
          },
          {
            height: 160,
            url: 'https://i.scdn.co/image/ab6761610000f17869dc893d0ea9e44a34f97cc9',
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
