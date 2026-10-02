export interface YouTubeVideo {
  id: string;
  title: string;
}

export interface YouTubeVideoWithThumbnail extends YouTubeVideo {
  thumbnail: string;
}
