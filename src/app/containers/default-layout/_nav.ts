import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  
  {
    name: 'Menu',
    title: true
  },
  {
    name: 'Empresas de seguridad',
    iconComponent: { name: 'cil-building' },
    children: [
      {
        name: '*Nueva Empresa',
       
        children: [
          {
            name: '--Sin fines de lucro ',
            url: '/forms/layout'
          },
          {
            name: '--Con fines de lucro',
            url: '/forms/layout'
          },
          {
            name: '--Barrios y Colonias',
            url: '/forms/layout'
          },


          
        ]

        
      },
      {
        name: '*Renovación',
        url: '/forms/layout2',
        children: [
          {
            name: 'Sin fines de lucro ',
            url: '/forms/layout2'
          },
          {
            name: 'Con fines de lucro ',
            url: '/forms/layout2'
          },
          {
            name: 'Barrios y Colonias',
            url: '/forms/layout2'
          },


          
        ]

      },
          ]
  },
  {
    name: 'Blindaje de vehiculos',
    url: '/buttons',
    children: [
      {
        name: '-Nuevo Vehiculo',
        url: '/buttons/buttons'
      },
      {
        name: '-Modificación',
        url: '/buttons/button-groups'
      },
      
    ]
  },
  
];
