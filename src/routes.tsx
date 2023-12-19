import { Route, Routes} from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout'; // Adjust the path accordingly
import Home from './components/home';


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout/>}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
