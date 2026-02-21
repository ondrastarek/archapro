const generateGalleryPaths = (projectId, count, extension = 'jpg') =>
  Array.from(
    { length: count },
    (_, index) => `/projects/${projectId}/gallery/photo${index + 1}.${extension}`
  )

const CATEGORY = {
  FAMILY_HOUSE: 'Rodinné domy',
  APARTMENT_HOUSE: 'Bytové domy',
  PUBLIC: 'Veřejné stavby',
  INDUSTRIAL: 'Průmysl a administrativa',
  INTERIOR: 'Interiéry',
  RECONSTRUCTION: 'Rekonstrukce',
  RECREATION: 'Rekreační objekty'
}

export const projectCategoryOrder = [
  CATEGORY.FAMILY_HOUSE,
  CATEGORY.APARTMENT_HOUSE,
  CATEGORY.PUBLIC,
  CATEGORY.INDUSTRIAL,
  CATEGORY.INTERIOR,
  CATEGORY.RECONSTRUCTION,
  CATEGORY.RECREATION
]

export const projects = [
  {
    id: 1,
    name: 'Stavební úpravy bytového domu',
    thumbnail: '/projects/1/thumbnail.jpg',
    gallery: generateGalleryPaths(1, 6),
    categories: [CATEGORY.APARTMENT_HOUSE, CATEGORY.RECONSTRUCTION]
  },
  {
    id: 2,
    name: 'Novostavba rodinného domu s garáží',
    thumbnail: '/projects/2/thumbnail.png',
    gallery: generateGalleryPaths(2, 3),
    categories: [CATEGORY.FAMILY_HOUSE]
  },
  {
    id: 3,
    name: 'Novostavba bytového domu',
    thumbnail: '/projects/3/thumbnail.png',
    gallery: generateGalleryPaths(3, 5),
    categories: [CATEGORY.APARTMENT_HOUSE]
  },
  {
    id: 4,
    name: 'Rozšíření stávající výrobny a skladového areálu',
    thumbnail: '/projects/4/thumbnail.png',
    gallery: generateGalleryPaths(4, 4),
    categories: [CATEGORY.INDUSTRIAL]
  },
  {
    id: 5,
    name: 'Interiér mateřské školky',
    thumbnail: '/projects/5/thumbnail.png',
    gallery: generateGalleryPaths(5, 5),
    categories: [CATEGORY.INTERIOR, CATEGORY.PUBLIC]
  },
  {
    id: 6,
    name: 'Novostavba zázemí pro sociální službu',
    thumbnail: '/projects/6/thumbnail.png',
    gallery: generateGalleryPaths(6, 5),
    categories: [CATEGORY.PUBLIC]
  },
  {
    id: 7,
    name: 'Vestavba kancelářských prostorů do stávající průmyslové haly',
    thumbnail: '/projects/7/thumbnail.png',
    gallery: generateGalleryPaths(7, 5),
    categories: [CATEGORY.INDUSTRIAL, CATEGORY.RECONSTRUCTION]
  },
  {
    id: 8,
    name: 'Rekreační objekt',
    thumbnail: '/projects/8/thumbnail.png',
    gallery: generateGalleryPaths(8, 4),
    categories: [CATEGORY.RECREATION]
  },
  {
    id: 9,
    name: 'Novostavba rodinného domu s garáží a wellness',
    thumbnail: '/projects/9/thumbnail.png',
    gallery: generateGalleryPaths(9, 6),
    categories: [CATEGORY.FAMILY_HOUSE]
  },
  {
    id: 10,
    name: 'Půdní vestavba bytové jednotky',
    thumbnail: '/projects/10/thumbnail.jpeg',
    gallery: generateGalleryPaths(10, 6),
    categories: [CATEGORY.APARTMENT_HOUSE, CATEGORY.RECONSTRUCTION]
  },
  {
    id: 11,
    name: 'Novostavba rodinného domu',
    thumbnail: '/projects/11/thumbnail.jpeg',
    gallery: generateGalleryPaths(11, 5),
    categories: [CATEGORY.FAMILY_HOUSE]
  },
  {
    id: 12,
    name: 'Novostavba rodinného domu',
    thumbnail: '/projects/12/thumbnail.jpeg',
    gallery: generateGalleryPaths(12, 6),
    categories: [CATEGORY.FAMILY_HOUSE]
  },
  {
    id: 13,
    name: 'Novostavba rodinného domu',
    thumbnail: '/projects/13/thumbnail.png',
    gallery: generateGalleryPaths(13, 4),
    categories: [CATEGORY.FAMILY_HOUSE]
  },
  {
    id: 14,
    name: 'Novostavba rodinného domu',
    thumbnail: '/projects/14/thumbnail.jpeg',
    gallery: generateGalleryPaths(14, 4),
    categories: [CATEGORY.FAMILY_HOUSE]
  },
  {
    id: 15,
    name: 'Novostavba rodinného domu',
    thumbnail: '/projects/15/thumbnail.jpeg',
    gallery: generateGalleryPaths(15, 6),
    categories: [CATEGORY.FAMILY_HOUSE]
  },
  {
    id: 16,
    name: 'Novostavba rodinného domu',
    thumbnail: '/projects/16/thumbnail.jpeg',
    gallery: generateGalleryPaths(16, 4, 'png'),
    categories: [CATEGORY.FAMILY_HOUSE, CATEGORY.INTERIOR]
  },
  {
    id: 17,
    name: 'Přístavba k restauraci',
    thumbnail: '/projects/17/thumbnail.png',
    gallery: generateGalleryPaths(17, 4, 'png'),
    categories: [CATEGORY.PUBLIC, CATEGORY.INTERIOR]
  },
  {
    id: 18,
    name: 'Novostavba rodinného domu',
    thumbnail: '/projects/18/thumbnail.png',
    gallery: generateGalleryPaths(18, 5, 'png'),
    categories: [CATEGORY.FAMILY_HOUSE, CATEGORY.INTERIOR]
  },
  {
    id: 19,
    name: 'Novostavba rodinného domu',
    thumbnail: '/projects/19/thumbnail.png',
    gallery: generateGalleryPaths(19, 4, 'png'),
    categories: [CATEGORY.FAMILY_HOUSE, CATEGORY.INTERIOR]
  },
  {
    id: 20,
    name: 'Stavební úprava rodinného domu',
    thumbnail: '/projects/20/thumbnail.png',
    gallery: generateGalleryPaths(20, 3, 'png'),
    categories: [CATEGORY.FAMILY_HOUSE, CATEGORY.RECONSTRUCTION]
  },
  {
    id: 21,
    name: 'Stavební úprava a přístavba k výrobní hale',
    thumbnail: '/projects/21/thumbnail.png',
    gallery: generateGalleryPaths(21, 4, 'png'),
    categories: [CATEGORY.RECONSTRUCTION, CATEGORY.INDUSTRIAL]
  },
  {
    id: 22,
    name: 'Rekreační objekt',
    thumbnail: '/projects/22/thumbnail.png',
    gallery: generateGalleryPaths(22, 4, 'png'),
    categories: [CATEGORY.FAMILY_HOUSE, CATEGORY.RECREATION, CATEGORY.INTERIOR]
  },
  {
    id: 23,
    name: 'Interiér restauračního objektu',
    thumbnail: '/projects/23/thumbnail.png',
    gallery: generateGalleryPaths(23, 3, 'png'),
    categories: [CATEGORY.INTERIOR, CATEGORY.PUBLIC]
  }
]
