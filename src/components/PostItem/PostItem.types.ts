export interface Post {
  authorMeta: {
    id: string;
    avatar: string;
    name: string;
    nickName: string;
  };
  commentCount: number;
  diggCount: number;
  hashtags: Array<{
    id: string;
    name: string;
  }>;
  id: string;
  text: string;
  videoUrl: string;
}
