import { RouterProvider, RouterProviderProps } from 'react-router-dom'
import { router } from '@/router/router';

const routerProps: RouterProviderProps['router'] = router;

export default function App() {

  return (
    <>
      <RouterProvider router={routerProps}/>
    </>
  )
}
