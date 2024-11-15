// src/loadProjects.js

import Project1Desctiption from '@/views/ProjectDescriptions/Project1Desctiption.vue'

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

const project1Desc = `
<section>
    <p>
        Tento projekt zahrnoval rozsáhlou rekonstrukci stávající budovy, která byla přeměněna na moderní bytový dům. Při návrhu bylo klíčové zachovat stávající konstrukční prvky a zároveň implementovat nové technologie pro zvýšení energetické účinnosti a komfortu obyvatel.
    </p>
    <h2>Hlavní kroky rekonstrukce</h2>
    <ul>
        <li>Statické posouzení a zajištění budovy.</li>
        <li>Úprava dispozice pro vytvoření moderních bytových jednotek.</li>
        <li>Instalace nových inženýrských sítí, včetně rozvodů elektřiny, vody a kanalizace.</li>
        <li>Implementace opatření pro odhlučnění a zlepšení tepelně-izolačních vlastností.</li>
        <li>Instalace moderních systémů vytápění a ventilace.</li>
    </ul>
    <p>
        Projekt probíhal v souladu se všemi platnými stavebními předpisy a byl realizován s důrazem na vysokou kvalitu materiálů a zpracování.
    </p>
</section>`;


export const projects =
  [
    { id: 1, name: 'Rekonstrukce objektu na bytový dům', descriptionComponent: Project1Desctiption, thumbnail: '/projects/1/thumbnail.jpg', gallery: gallery},
    { id: 2, name: 'Project 2', description: lorem, thumbnail: '/projects/2/thumbnail.png', gallery: gallery },
    { id: 3, name: 'Project 3', description: lorem, thumbnail: '/projects/3/thumbnail.png', gallery: gallery },
    { id: 4, name: 'Project 4', description: lorem, thumbnail: '/projects/4/thumbnail.png', gallery: gallery },
    { id: 5, name: 'Project 5', description: lorem, thumbnail: '/projects/5/thumbnail.png', gallery: gallery },
    { id: 6, name: 'Project 6', description: lorem, thumbnail: '/projects/6/thumbnail.png', gallery: gallery }
  ]