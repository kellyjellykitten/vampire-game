import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import CreatePage from './pages/CreatePage';
import InspirationPage from './pages/InspirationPage';
import NotFoundPage from './pages/NotFoundPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      {/* any routes under here use MainLayout */}
      <Route index element={<HomePage />} />
      <Route path='/create' element={<CreatePage />} />
      <Route path='/inspiration' element={<InspirationPage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />
};
export default App