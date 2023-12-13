export const MENUS = [
  {
    label: 'Admin',
    items: [
      {
        label: 'Dashboard',
        icon: 'fa fa-house',
        routerLink: ['/motor-reservas'],
      },
    ],
  },
  {
    label: 'ADMINISTRAÇÃO',
    items: [
      {
        label: 'Campings',
        icon: 'fa fa-compass',
        routerLink: ['/motor-reservas/campings'],
      },
      {
        label: 'Smart Camping',
        icon: 'fa fa-regular fa-compass',
        routerLink: ['/motor-reservas/'],
      },
      {
        label: 'Categorias de Vagas',
        icon: 'fa fa-tag',
        routerLink: ['/motor-reservas/box/box-types'],
      },
      {
        label: 'Vagas',
        icon: 'fa fa-caravan',
        routerLink: ['/motor-reservas/box/boxes'],
      },
      {
        label: 'Atrações / Experiências',
        icon: 'fa fa-person-walking',
        routerLink: ['/motor-reservas/'],
      },
      {
        label: 'Reservas',
        icon: 'fa fa-calendar-days',
        routerLink: ['/motor-reservas/'],
      },
      {
        label: 'Galeria de Imagens',
        icon: 'fa fa-image',
        routerLink: ['/motor-reservas/gallery-images/'],
      },
    ],
  },
  {
    label: '4 Code SolutionS',
    items: [
      {
        label: 'Visit Website',
        icon: 'fa-solid fa-globe',
        url: ['https://4codesolutions.com/'],
        target: '_blank',
      },
    ],
  },
];
