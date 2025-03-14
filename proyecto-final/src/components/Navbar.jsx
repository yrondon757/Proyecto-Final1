import { Link, NavLink } from "react-router-dom";

function Navbar() {
    const styles = {
      nav: "bg-[#F7F7F7] w-full h-[70px] flex justify-between items-center px-15 border-b-3 border-[#19899B]",
      p: "text-black text-3xl font-bold",
      ul: " font-bold text-lg flex gap-10 text-black select-none",
      button: "w-[120px] h-[45px] bg-white hover:bg-[#D4D1D1] text-[#19899B] font-bold border-2 border-[#19899B] rounded-lg cursor-pointer select-none",
      button2: "w-[120px] h-[45px] bg-[#19899B] hover:bg-[#104B55] text-white font-bold rounded-lg cursor-pointer select-none",
    }
    return (
      <nav className={styles.nav}>
        <p className={styles.p}><Link to="/">LOGO</Link></p>
        <ul className={styles.ul}>
          <li className="hover:text-[#19899B] cursor-pointer"><NavLink to="/" className={({ isActive }) => isActive ? "text-[#19899B]" : ""}>Inicio</NavLink></li>
          <li className="hover:text-[#19899B] cursor-pointer"><NavLink to="/nosotros" className={({ isActive }) => isActive ? "text-[#19899B]" : ""}>Nosotros</NavLink></li>
          <li className="hover:text-[#19899B] cursor-pointer"><NavLink to="/servicios" className={({ isActive }) => isActive ? "text-[#19899B]" : ""}>Servicios</NavLink></li>
          <li className="hover:text-[#19899B] cursor-pointer"><NavLink to="/contacto" className={({ isActive }) => isActive ? "text-[#19899B]" : ""}>Contacto</NavLink></li>
        </ul>
        <div className="flex gap-7">
          <Link to="/login"> <button className={styles.button}>Ingresar</button> </Link>
          <Link to="/register"> <button className={styles.button2}>Registrarse</button> </Link>
        </div>
      </nav>
    );
  }
  
  export default Navbar;