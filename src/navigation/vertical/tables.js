import { Server, Grid, Circle } from 'react-feather'

export default [
  {
    id: 'tablesReactstrap',
    title: 'Event Information',
    icon: <Server size={20} />,
    navLink: '/tables/reactstrap'
  },
  {
    id: 'tablesReactstrap',
    title: 'Available Events',
    icon: <Server size={20} />,
    navLink: '/datatables/advance'
  },
  {
    id: 'tablesReactstrap',
    title: 'Succesfully Booked',
    icon: <Server size={20} />,
    navLink: '/datatables/basic'
  }
  // {
  //   id: 'dataTable',
  //   title: 'DataTable',
  //   icon: <Grid size={20} />,
  //   children: [
  //     {
  //       id: 'dtBasic',
  //       title: 'Basic',
  //       icon: <Circle size={12} />,
  //       navLink: '/datatables/basic'
  //     },
  //     {
  //       id: 'dtAdvance',
  //       title: 'Advanced',
  //       icon: <Circle size={12} />,
  //       navLink: '/datatables/advance'
  //     }
  //   ]
  // }
]
