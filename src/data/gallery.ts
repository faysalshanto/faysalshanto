export interface GalleryPhoto {
  id: string;
  src: string;
  title: string;
  category?: string;
}

export const galleryPhotos: GalleryPhoto[] = [
  {
    id: 'maglyn-cover-1',
    src: '/maglyn-new-cover.png',
    title: 'Maglyn Custom Print Edition',
    category: 'Startup & Design',
  },
  {
    id: 'maglyn-cover-puspo',
    src: '/maglyn-cover-puspo.png',
    title: 'Maglyn Puspo Special Edition',
    category: 'Special Print',
  },
  {
    id: 'maglyn-memories',
    src: '/maglyn-2.jpg',
    title: 'Maglyn Stories & Memories',
    category: 'Personalized Keepsake',
  },
  {
    id: 'maglyn-collection',
    src: '/maglyn-1.jpg',
    title: 'Maglyn Print Collection',
    category: 'Product Line',
  },
];
