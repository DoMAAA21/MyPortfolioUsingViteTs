import { Route, Routes } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout'; // Adjust the path accordingly

const Home = () => <div>Home Page</div>;
const About = () => <div>About Page</div>;
const Contact = () => <div>Contact Page</div>;

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout/>}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
