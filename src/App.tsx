import { RouterProvider, RouterProviderProps } from 'react-router-dom';
import { router } from '@/router/router';

const routerProps: RouterProviderProps['router'] = router;

/**
 * Componente principal de la aplicación.
 * 
 * Este componente es responsable de configurar y proporcionar el enrutador a la aplicación,
 * permitiendo la navegación entre diferentes rutas.
 * 
 * @returns El componente `App` con el proveedor de enrutador.
 */
export default function App() {
  return (
    <>
      <RouterProvider router={routerProps} />
    </>
  );
}

