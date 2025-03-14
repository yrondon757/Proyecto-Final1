import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Inicio from './pages/Inicio.jsx';
import Nosotros from './pages/Nosotros.jsx'
import Servicios from './pages/Servicios.jsx';
import Contacto from './pages/Contacto.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import PrivateRoute from "./routes/PrivateRoute.jsx";
import NotFound from "./pages/NotFound.jsx"
import Tickets from "./pages/Tickets.jsx";

function App() {
  const Location = useLocation();
  const hideNavbarFooter = ["/login", "/register"];
  const showNavbarFooter = !hideNavbarFooter.includes(location.pathname);
  
  return (
    <>
      { showNavbarFooter && <Navbar/> }
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<PrivateRoute/>}>
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/profile" element={<h1> My profile</h1>} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      { showNavbarFooter && <Footer/> }
    </>
  );
}

export default App;
