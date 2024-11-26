// src/loadProjects.js

import Project1 from '@/views/ProjectDetails/Project1.vue';
import Project2 from '@/views/ProjectDetails/Project2.vue';

// Helper function to generate gallery paths
const generateGalleryPaths = (projectId, count) =>
  Array.from({ length: count }, (_, index) =>
    `/projects/${projectId}/gallery/photo${index + 1}.jpg`
  );

const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare quis lacus et hendrerit. Maecenas fringilla scelerisque orci ac convallis. Nullam justo dui, interdum non rutrum eget, imperdiet in felis. Quisque ligula nisl, bibendum quis mi sed, aliquam venenatis metus. Integer ipsum est, mattis vitae sem vel, faucibus ullamcorper ex. Duis sollicitudin erat eget quam facilisis consequat. Duis vitae ullamcorper libero, quis semper erat. Cras et ex justo. Praesent efficitur ex felis, id vulputate massa accumsan non.

Proin at hendrerit mi, et imperdiet purus. Praesent tincidunt, odio a sodales ultricies, leo turpis porta dui, vel elementum turpis libero nec libero. Ut auctor dui nulla, at euismod lectus lobortis sed. In vel magna feugiat, eleifend augue elementum, eleifend justo. Nullam sit amet aliquet metus. Ut dignissim sit amet nunc eget placerat. Donec cursus congue commodo.

Nullam tristique leo in elit aliquam viverra. Duis efficitur nisi nec vulputate tincidunt. Pellentesque nec dui eleifend, sagittis leo at, fermentum augue. Curabitur suscipit venenatis egestas. Mauris tristique, augue at rhoncus finibus, turpis nunc sagittis ante, et maximus justo lectus non enim. Proin ornare ligula eget consequat scelerisque. Maecenas ornare lorem eget faucibus elementum. Donec leo ex, tincidunt posuere urna nec, aliquam euismod diam. Praesent mattis neque at orci pulvinar, ac sagittis erat rhoncus. Vestibulum libero quam, molestie et egestas a, commodo non nunc. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus et ligula nec viverra. Mauris at libero nisl. Praesent sollicitudin fermentum justo.`;

// Define projects
export const projects = [
  {
    id: 1,
    name: 'Rekonstrukce objektu na bytový dům',
    descriptionComponent: Project1,
    thumbnail: '/projects/1/thumbnail.jpg',
    gallery: generateGalleryPaths(1, 6),
  },
  {
    id: 2,
    name: 'Novostavba rodinného domu s garáží',
    descriptionComponent: Project2,
    thumbnail: '/projects/2/thumbnail.png',
    gallery: generateGalleryPaths(2, 3),
  },
  {
    id: 3,
    name: 'Novostavba bytového domu',
    description: lorem,
    thumbnail: '/projects/3/thumbnail.png',
    gallery: generateGalleryPaths(3, 5),
  },
  {
    id: 4,
    name: '---Novostavba penzionu',
    description: lorem,
    thumbnail: '/projects/4/thumbnail.png',
    gallery: generateGalleryPaths(1, 6), // Example reused gallery
  },
  {
    id: 5,
    name: 'Interiér mateřské školky',
    description: lorem,
    thumbnail: '/projects/5/thumbnail.png',
    gallery: generateGalleryPaths(5, 5),
  },
  {
    id: 6,
    name: 'Novostavba zázemí pro sociální službu',
    description: lorem,
    thumbnail: '/projects/6/thumbnail.png',
    gallery: generateGalleryPaths(6, 5),
  },
  {
    id: 7,
    name: 'Rekreační objekt',
    description: lorem,
    thumbnail: '/projects/7/thumbnail.png',
    gallery: generateGalleryPaths(7, 4),
  },
  {
    id: 8,
    name: 'Vestavba kancelářských prostorů do stávajícího objektu průmyslové haly',
    description: lorem,
    thumbnail: '/projects/8/thumbnail.png',
    gallery: generateGalleryPaths(8, 5),
  },
  {
    id: 9,
    name: 'Novostavba rodinného domu s garáží a wellness',
    description: lorem,
    thumbnail: '/projects/9/thumbnail.png',
    gallery: generateGalleryPaths(9, 6),
  },
];