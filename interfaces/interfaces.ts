interface IVisual {
  url: string;
  width?: Number;
  height?: Number;
}

export interface IArtist {
  followers: number;
  genres: Array<String>;
  description: string;
  id: string;
  images: Array<IVisual>;
  name: string;
  popularity: number;
  type: string;
  uri: string;
};

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

export interface IPlaylist {
  uri: string;
  name: string;
  description: string;
  image: IVisual;
  total_time: string;
  songs: Array<ISong>
}

interface IAlbum {
  name: string;
  songs: Array<ISong>;
  cover: string;
}

export interface ISong {
  name: string;
  duration_ms: number;
  listens: number;
  preview_url: string
  image_url: string
}

export interface IMonthlyListeners {
  rank: Number;
  artist: String;
  albums: Array<IAlbum>;
  monthlyListeners: Number;
  playlist: Array<IPlaylist>;
  profile: IProfile;
}
