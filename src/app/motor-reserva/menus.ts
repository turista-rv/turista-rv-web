export const MENUS = [
  {
    label: 'ADMINASTRAÇÃO',
    items: [
      {
        label: 'Dashboard',
        icon: 'fa fa-house',
        routerLink: ['/motor-reservas'],
      },
      {
        label: 'Postagens',
        icon: 'fa fa-house',
        routerLink: ['/motor-reservas/posts'],
      },
      {
        label: 'Leads',
        icon: 'fa fa-house',
        routerLink: ['/motor-reservas/leads'],
      },
    ],
  },
  {
    label: 'CAMPINGS',
    items: [
      {
        label: 'Campings',
        icon: 'fa fa-compass',
        routerLink: ['/motor-reservas/campings'],
      },
      {
        label: 'Categoria de Campings',
        icon: 'fa fa-tag',
        routerLink: ['/motor-reservas/campings/categories'],
      },
    ],
  },
  {
    label: 'VAGAS',
    items: [
      {
        label: 'Vagas',
        icon: 'fa fa-caravan',
        routerLink: ['/motor-reservas/box/boxes'],
      },
      {
        label: 'Categorias de Vagas',
        icon: 'fa fa-tag',
        routerLink: ['/motor-reservas/box/box-types'],
      },
    ],
  },
  {
    label: 'ATRAÇÕES',
    items: [
      {
        label: 'Atrações / Experiências',
        icon: 'fa fa-person-walking',
        routerLink: ['/motor-reservas/attractions'],
      },
      {
        label: 'Categoria de Atrações',
        icon: 'fa fa-tag',
        routerLink: ['/motor-reservas/attractions/categories'],
      },
    ],
  },
  {
    label: 'RESERVAS',
    items: [
      {
        label: 'Reservas',
        icon: 'fa fa-calendar-days',
        routerLink: ['/motor-reservas/'],
      },
    ],
  },
  {
    label: 'RELATÓRIOS',
    items: [
      {
        label: 'Financeiro',
        icon: 'fa fa-money-bill',
        routerLink: ['/motor-reservas/'],
      },
    ],
  },
  {
    label: 'IMAGENS',
    items: [
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
