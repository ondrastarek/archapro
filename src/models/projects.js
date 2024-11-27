const generateGalleryPaths = (projectId, count) =>
  Array.from({ length: count }, (_, index) =>
    `/projects/${projectId}/gallery/photo${index + 1}.jpg`
  );

export const projects = [
  {
    id: 1,
    name: 'Rekonstrukce objektu na bytový dům',
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
    name: 'Rekreační objekt',
    thumbnail: '/projects/7/thumbnail.png',
    gallery: generateGalleryPaths(7, 4),
  },
  {
    id: 8,
    name: 'Vestavba kancelářských prostorů do stávajícího objektu průmyslové haly',
    thumbnail: '/projects/8/thumbnail.png',
    gallery: generateGalleryPaths(8, 5),
  },
  {
    id: 9,
    name: 'Novostavba rodinného domu s garáží a wellness',
    thumbnail: '/projects/9/thumbnail.png',
    gallery: generateGalleryPaths(9, 6),
  },
];