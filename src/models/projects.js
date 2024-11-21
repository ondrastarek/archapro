// src/loadProjects.js

import Project1 from '@/views/ProjectDetails/Project1.vue'
import Project2 from '@/views/ProjectDetails/Project2.vue'

const project1gallery = [
  '/projects/1/gallery/photo1.jpg',
  '/projects/1/gallery/photo2.jpg',
  '/projects/1/gallery/photo5.jpg',
  '/projects/1/gallery/photo4.jpg',
  '/projects/1/gallery/photo3.jpg',
  '/projects/1/gallery/photo6.jpg'
]

const project2gallery = [
  '/projects/2/gallery/photo1.jpg',
  '/projects/2/gallery/photo2.jpg',
  '/projects/2/gallery/photo3.jpg'
]

const project3gallery = [
  '/projects/3/gallery/photo1.jpg',
  '/projects/3/gallery/photo2.jpg',
  '/projects/3/gallery/photo3.jpg',
  '/projects/3/gallery/photo4.jpg',
  '/projects/3/gallery/photo5.jpg'
]

const gallery = [
  '/projects/1/gallery/photo1.jpg',
  '/projects/1/gallery/photo2.jpg',
  '/projects/1/gallery/photo3.jpg',
  '/projects/1/gallery/photo4.jpg',
  '/projects/1/gallery/photo5.jpg',
  '/projects/1/gallery/photo6.jpg'
]

const lorem =  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare quis lacus et hendrerit. Maecenas fringilla scelerisque orci ac convallis. Nullam justo dui, interdum non rutrum eget, imperdiet in felis. Quisque ligula nisl, bibendum quis mi sed, aliquam venenatis metus. Integer ipsum est, mattis vitae sem vel, faucibus ullamcorper ex. Duis sollicitudin erat eget quam facilisis consequat. Duis vitae ullamcorper libero, quis semper erat. Cras et ex justo. Praesent efficitur ex felis, id vulputate massa accumsan non.\n" +
  "\n" +
  "Proin at hendrerit mi, et imperdiet purus. Praesent tincidunt, odio a sodales ultricies, leo turpis porta dui, vel elementum turpis libero nec libero. Ut auctor dui nulla, at euismod lectus lobortis sed. In vel magna feugiat, eleifend augue elementum, eleifend justo. Nullam sit amet aliquet metus. Ut dignissim sit amet nunc eget placerat. Donec cursus congue commodo.\n" +
  "\n" +
  "Nullam tristique leo in elit aliquam viverra. Duis efficitur nisi nec vulputate tincidunt. Pellentesque nec dui eleifend, sagittis leo at, fermentum augue. Curabitur suscipit venenatis egestas. Mauris tristique, augue at rhoncus finibus, turpis nunc sagittis ante, et maximus justo lectus non enim. Proin ornare ligula eget consequat scelerisque. Maecenas ornare lorem eget faucibus elementum. Donec leo ex, tincidunt posuere urna nec, aliquam euismod diam. Praesent mattis neque at orci pulvinar, ac sagittis erat rhoncus. Vestibulum libero quam, molestie et egestas a, commodo non nunc. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus et ligula nec viverra. Mauris at libero nisl. Praesent sollicitudin fermentum justo."


export const projects =
  [
    { id: 1, name: 'Rekonstrukce objektu na bytový dům', descriptionComponent: Project1, thumbnail: '/projects/1/thumbnail.jpg', gallery: project1gallery },
    { id: 2, name: 'Novostavba rodinného domu s garáží', descriptionComponent: Project2, thumbnail: '/projects/2/thumbnail.png', gallery: project2gallery },
    { id: 3, name: 'Novostavba bytového domu', description: lorem, thumbnail: '/projects/3/thumbnail.png', gallery: project3gallery },
    { id: 4, name: 'Novostavba penzionu', description: lorem, thumbnail: '/projects/4/thumbnail.png', gallery: gallery },
    { id: 5, name: 'Interiér mateřské školky', description: lorem, thumbnail: '/projects/5/thumbnail.png', gallery: gallery },
    { id: 6, name: 'Průmyslový areál', description: lorem, thumbnail: '/projects/6/thumbnail.png', gallery: gallery }
  ]