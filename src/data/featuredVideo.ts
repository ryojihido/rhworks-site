import { works } from './works';
import type { YouTubeVideo, YouTubeVideoWithThumbnail } from './youtube';

// Now Showing 帯で宣伝する作品。作品が替わったら、この title とすぐ下の featuredVideo を差し替える。
const featuredWorkTitle = '虫の皇女マユの旅';

const featuredWork = works.find((work) => work.title === featuredWorkTitle);
if (!featuredWork) {
  throw new Error(`featuredVideo: works.ts に「${featuredWorkTitle}」が見つかりません`);
}

export const featuredVideo = {
  label: 'Now Showing',
  kicker: 'Promotion Movie',
  work: featuredWork,
  status: '全五巻 完結',
  meta: ['電子版・紙版 発売中', '竹コミ！でカムバック連載中'],
  youtube: { id: 'HQwERn5dbzg', title: '【虫の皇女マユの旅】シリーズ宣伝movie' } satisfies YouTubeVideo,
  durationLabel: '59秒',
  teaserSrc: '/videos/featured/mayu-promo-teaser.mp4',
  posterSrc: '/videos/featured/mayu-promo-poster.webp',
  // 帯の配色。宣伝動画の背景（セピアの墨→紺の墨）と金の文字から拾った色。
  theme: {
    inkFrom: '#2b2420',
    inkTo: '#142029',
    gold: '#c9973a',
  },
};

export const otherVideos: YouTubeVideoWithThumbnail[] = [
  { id: 'O6Z8eO295as', title: '「クズ王子やりなおす！」プロモムービー', thumbnail: '/images/videos/O6Z8eO295as.webp' },
  { id: 't-rm55DtVxA', title: '「虫の皇女マユの旅」完結記念・読者プレゼント動画', thumbnail: '/images/videos/t-rm55DtVxA.webp' },
];
