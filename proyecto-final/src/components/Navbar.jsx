import { Link, NavLink } from "react-router-dom";

function Navbar() {
    const styles = {
      nav: "fixed bg-[#F7F7F7] w-full h-[70px] flex justify-between items-center px-15 border-b-3 border-[#19899B] select-none",
      p: "group text-black text-3xl font-bold",
      ul: " font-bold text-lg flex gap-10 text-black",
      button: "w-[120px] h-[45px] bg-white hover:bg-[#D4D1D1] text-[#19899B] font-bold border-2 border-[#19899B] rounded-lg cursor-pointer",
      button2: "w-[120px] h-[45px] bg-[#19899B] hover:bg-[#104B55] text-white font-bold rounded-lg cursor-pointer",
    }
    return (
      <nav className={styles.nav}>
        <p className={styles.p}><Link to="/">LOGO</Link>
          <span class="absolute left-17 translate-y-8 mt-2 bg-[#19899B] text-white text-[12px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
            StarLink
          </span>
        </p>
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