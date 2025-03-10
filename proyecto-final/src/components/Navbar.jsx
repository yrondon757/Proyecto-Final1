function Navbar() {
    const styles = {
      nav: "bg-[#F7F7F7] w-full h-[70px] flex justify-between items-center px-15 border-b-3 border-[#19899B]",
      p: "text-black text-3xl font-bold",
      ul: " font-bold text-lg flex gap-10 text-black",
      button: "w-[120px] bg-white hover:bg-[#D4D1D1] text-[#19899B] font-bold py-2 px-4 border-2 border-[#19899B] rounded-lg cursor-pointer",
      button2: "w-[120px] bg-[#19899B] hover:bg-[#104B55] text-white font-bold py-2 px-4 rounded-lg cursor-pointer",
    }
    return (
      <nav className={styles.nav}>
        <p className={styles.p}>LOGO</p>
        <ul className={styles.ul}>
          <li className="hover:text-[#19899B] cursor-pointer">Inicio</li>
          <li className="hover:text-[#19899B] cursor-pointer">Nosotros</li>
          <li className="hover:text-[#19899B] cursor-pointer">Servicios</li>
          <li className="hover:text-[#19899B] cursor-pointer">Contacto</li>
        </ul>
        <div className="flex gap-7">
          <button className={styles.button}>Ingresar</button>
          <button className={styles.button2}>Registrarse</button>
        </div>
      </nav>
    );
  }
  
  export default Navbar;