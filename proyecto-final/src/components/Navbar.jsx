function Navbar() {
    const styles = {
      nav: "bg-indigo-900 w-full h-[70px] flex justify-between items-center px-10",
      p: "text-white text-3xl font-bold",
      ul: "flex gap-4 text-white",
      button: "bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded",
      button2: "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded",
    }
    return (
      <nav className={styles.nav}>
        <p className={styles.p}>LOGO</p>
        <ul className={styles.ul}>
          <li>Inicio</li>
          <li>Nosotros</li>
          <li>Servicios</li>
          <li>Contacto</li>
        </ul>
        <div className="flex gap-7">
          <button className={styles.button}>Ingresar</button>
          <button className={styles.button2}>Registrarse</button>
        </div>
      </nav>
    );
  }
  
  export default Navbar;