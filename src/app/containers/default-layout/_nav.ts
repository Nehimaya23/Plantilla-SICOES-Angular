import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  
  {
    name: 'Menu',
    title: true
  },
  {
    name: 'Empresas de seguridad',
    url: '/base',
    iconComponent: { name: '' },
    children: [
      {
        name: 'Nueva Empresa',
        url: '/base/accordion'
      },
      {
        name: 'Renovación',
        url: '/base/breadcrumbs'
      },
          ]
  },
  {
    name: 'Blindaje de vehiculos',
    url: '/buttons',
    iconComponent: { name: '' },
    children: [
      {
        name: 'Nuevo Vehiculo',
        url: '/buttons/buttons'
      },
      {
        name: 'Modificación',
        url: '/buttons/button-groups'
      },
      
    ]
  },
  
];