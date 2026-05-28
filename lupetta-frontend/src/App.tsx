import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import ComeFunziona from './pages/ComeFunziona';
import LupettaMini from './pages/LupettaMini';
import LupettaMaxi from './pages/LupettaMaxi';
import Monitoraggio from './pages/Monitoraggio';
import Gabbione from './pages/Gabbione';
import Consumabile from './pages/Consumabile';
import Benefici from './pages/Benefici';
import FAQ from './pages/FAQ';
import Mission from './pages/Mission';
import Azienda from './pages/Azienda';
import Risorse from './pages/Risorse';
import Approfondimenti from './pages/Approfondimenti';
import Contatti from './pages/Contatti';

const router = createBrowserRouter(
  [
    {
      path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'come-funziona', element: <ComeFunziona /> },
      { path: 'come-funziona/mini', element: <LupettaMini /> },
      { path: 'come-funziona/maxi', element: <LupettaMaxi /> },
      { path: 'monitoraggio', element: <Monitoraggio /> },
      { path: 'gabbione', element: <Gabbione /> },
      { path: 'consumabile', element: <Consumabile /> },
      { path: 'benefici', element: <Benefici /> },
      { path: 'faq', element: <FAQ /> },
      { path: 'mission', element: <Mission /> },
      { path: 'azienda', element: <Azienda /> },
      { path: 'risorse', element: <Risorse /> },
      { path: 'approfondimenti', element: <Approfondimenti /> },
      { path: 'contatti', element: <Contatti /> },
    ],
  },
], { basename: import.meta.env.BASE_URL });

function App() {
  return <RouterProvider router={router} />;
}

export default App;