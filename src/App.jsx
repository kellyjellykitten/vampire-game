import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import CreatePage from './pages/CreatePage';
import VampireNamePage from './pages/VampireNamePage';
import SideCharactersPage from './pages/SideCharactersPage';
import VampireSkillsPage from './pages/VampireSkillsPage';
import VampireResourcesPage from './pages/VampireResourcesPage';
import VampireMemoriesPage from './pages/VampireMemoriesPage';
import VampireConversionPage from './pages/VampireConversionPage';
import VampireSummaryPage from './pages/VampireSummaryPage';
import StartPage from './pages/game/StartPage';
import RollPage from './pages/game/RollPage';
import PromptPage from './pages/game/PromptPage';
import InspirationPage from './pages/InspirationPage';
import NotFoundPage from './pages/NotFoundPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      {/* any routes under here use MainLayout */}
      <Route index element={<HomePage />} />
      <Route path='/create' element={<CreatePage />} />
      <Route path='/create/name' element={<VampireNamePage />} />
      <Route path='/create/characters' element={<SideCharactersPage />} />
      <Route path='/create/skills' element={<VampireSkillsPage />} />
      <Route path='/create/resources' element={<VampireResourcesPage />} />
      <Route path='/create/experiences' element={<VampireMemoriesPage />} />
      <Route path='/create/conversion' element={<VampireConversionPage />} />
      <Route path='/create/summary' element={<VampireSummaryPage />} />
      <Route path='/game' element={<StartPage />} />
      <Route path='/game/roll' element={<RollPage />} />
      <Route path='/game/prompt' element={<PromptPage />} />
      <Route path='/inspiration' element={<InspirationPage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Route>
  )
);

const App = () => {
    return (
      <RouterProvider router={router} />
  );
};
export default App