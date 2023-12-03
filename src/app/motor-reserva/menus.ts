export const MENUS = [
  {
    label: 'Admin',
    items: [
      {
        label: 'Dashboard',
        icon: 'fa fa-house',
        routerLink: ['/admin'],
      },
    ],
  },
  {
    label: 'ADMINISTRAÇÃO',
    items: [
      {
        label: 'Campings',
        icon: 'fa fa-house',
        routerLink: ['/admin/campings'],
      },
      {
        label: 'Smart Camping',
        icon: 'fa fa-house',
        routerLink: ['/admin/'],
      },
      {
        label: 'Vagas',
        icon: 'fa fa-house',
        routerLink: ['/admin/box/boxes'],
      },
      {
        label: 'Categorias de Vagas',
        icon: 'fa fa-house',
        routerLink: ['/admin/box/box-types'],
      },
      {
        label: 'Atrações / Experiências',
        icon: 'fa fa-house',
        routerLink: ['/admin/'],
      },
      {
        label: 'Reservas',
        icon: 'fa fa-house',
        routerLink: ['/admin/'],
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
