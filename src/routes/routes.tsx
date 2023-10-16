import { type RouteObject } from 'react-router-dom'

import { Dashboard } from '@/views'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Dashboard />,
  },
]

export default routes
