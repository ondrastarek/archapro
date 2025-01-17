const generateGalleryPaths = (projectId, count) =>
  Array.from({ length: count }, (_, index) =>
    `/projects/${projectId}/gallery/photo${index + 1}.jpg`
  );

export const projects = [
  {
    id: 1,
    name: 'Stavební úpravy bytového domu',
    thumbnail: '/projects/1/thumbnail.jpg',
    gallery: generateGalleryPaths(1, 6),
  },
  {
    id: 2,
    name: 'Novostavba rodinného domu s garáží',
    thumbnail: '/projects/2/thumbnail.png',
    gallery: generateGalleryPaths(2, 3),
  },
  {
    id: 3,
    name: 'Novostavba bytového domu',
    thumbnail: '/projects/3/thumbnail.png',
    gallery: generateGalleryPaths(3, 5),
  },
  {
    id: 4,
    name: 'Rozšíření stávající výrobny a skladového areálu',
    thumbnail: '/projects/4/thumbnail.png',
    gallery: generateGalleryPaths(4, 4),
  },
  {
    id: 5,
    name: 'Interiér mateřské školky',
    thumbnail: '/projects/5/thumbnail.png',
    gallery: generateGalleryPaths(5, 5),
  },
  {
    id: 6,
    name: 'Novostavba zázemí pro sociální službu',
    thumbnail: '/projects/6/thumbnail.png',
    gallery: generateGalleryPaths(6, 5),
  },
  {
    id: 7,
    name: 'Vestavba kancelářských prostorů do stávající průmyslové haly',
    thumbnail: '/projects/7/thumbnail.png',
    gallery: generateGalleryPaths(7, 5),
  },
  {
    id: 8,
    name: 'Rekreační objekt',
    thumbnail: '/projects/8/thumbnail.png',
    gallery: generateGalleryPaths(8, 4),
  },
  {
    id: 9,
    name: 'Novostavba rodinného domu s garáží a wellness',
    thumbnail: '/projects/9/thumbnail.png',
    gallery: generateGalleryPaths(9, 6),
  },
  {
    id: 10,
    name: 'Půdní vestavba bytové jednotky',
    thumbnail: '/projects/10/thumbnail.jpeg',
    gallery: generateGalleryPaths(10, 6),
  },
  {
    id: 11,
    name: 'Novostavba rodinného domu',
    thumbnail: '/projects/11/thumbnail.jpeg',
    gallery: generateGalleryPaths(11, 5),
  },
  {
    id: 12,
    name: 'Novostavba rodinného domu',
    thumbnail: '/projects/12/thumbnail.jpeg',
    gallery: generateGalleryPaths(12, 6),
  },
  {
    id: 13,
    name: 'Novostavba rodinného domu',
    thumbnail: '/projects/13/thumbnail.png',
    gallery: generateGalleryPaths(13, 4),
  },
  {
    id: 14,
    name: 'Novostavba rodinného domu',
    thumbnail: '/projects/14/thumbnail.jpeg',
    gallery: generateGalleryPaths(14, 4),
  },
  {
    id: 15,
    name: 'Novostavba rodinného domu',
    thumbnail: '/projects/15/thumbnail.jpeg',
    gallery: generateGalleryPaths(15, 6),
  },
];