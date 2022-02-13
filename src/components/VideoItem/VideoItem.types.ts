export interface Video {
  id: string;
  video: {
    playAddr: string;
  };
  stats: {
    playCount: number;
  };
}
