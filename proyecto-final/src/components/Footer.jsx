function Footer() {
  const styles = {
    footer:"bg-white w-full h-[500px] col justify-center text-white",
    div: "w-full h-[90%] bg-gradient-to-b from-[#19899B]/40 to-[#0C0C96]/40 flex flex-col justify-end items-center",
    div2: "w-full h-[10%] text-black text-2xl bg-[#19899B] flex justify-center items-center font-bold"
  };
  return (
    <footer className={styles.footer}>
      <div className={styles.div}>
        <div className="w-[90%] h-[80%] text-black flex justify-between items-center border-t-4">
          <div className="space-y-4 h-[250px] flex flex-col justify-center">
            <p className="text-sm"><span className="font-bold text-3xl">Star</span><span className="text-[#19899B] font-bold text-3xl">Link</span><br />Internet de alta velocidad...</p>
            <p className="text-sm"><span className="font-bold text-base">Direccion:</span><br/>Caracas 1030<br/>Distrito Capital</p>
            <p className="text-sm"><span className="font-bold text-base">Detalle de Contactos:</span><br/>+58 424 1223 45 67<br/>+58 412 987 65 43</p>
          </div>
          <div className="space-y-4 h-[250px] flex flex-col justify-center">
              <h3 className="font-bold text-[#19899B] text-base">Servicios</h3>
              <li>Internet</li>
              <li>Soporte IT</li>
              <li>CCTV</li>
              <li>Redes</li>
              <li>Servidores</li>
          </div>
          <div className="space-y-4 h-[250px] flex flex-col justify-center">
            <h3 className="font-bold text-[#19899B] text-base">Productos</h3>
            <li>WIFI Routers</li>
            <li>Impresoras Multifuncionales</li>
            <li>Camaras, DVR, NVR</li>
            <li>Routers, Switches</li>
            <li>PCs, Laptops, Monitores</li>
          </div>
          <div className="space-y-4 h-[250px] flex flex-col justify-start">
            <h3 className="font-bold text-[#19899B] text-base">Legal</h3>
            <li>Contacto</li>
            <li>Politica de Privacidad</li>
            <li>Terminos & Condiciones</li>
          </div>
        </div>
        <div className="w-[90%] h-[10%] flex justify-end items-center">
          <div className="flex justify-center items-center gap-2 pb-4 text-[#19899B]">
            <a href="https://www.facebook.com/"><img src="https://banesco-prod-2020.s3.amazonaws.com/wp-content/themes/banescocontigo/assets/images/social-media/facebook-circle-white.svg.gzip" alt="facebook" /></a>
            <a href="https://www.instagram.com/"><img src="https://banesco-prod-2020.s3.amazonaws.com/wp-content/themes/banescocontigo/assets/images/social-media/instagram-circle-white.svg.gzip" alt="instagram" /></a>
            <a href="https://www.linkedin.com/"><img src="https://banesco-prod-2020.s3.amazonaws.com/wp-content/themes/banescocontigo/assets/images/social-media/linkedin-circle-white.svg.gzip" alt="linkedin" /></a>
            <a href="https://www.youtube.com/"><img src="https://banesco-prod-2020.s3.amazonaws.com/wp-content/themes/banescocontigo/assets/images/social-media/youtube-circle-white.svg.gzip" alt="youtube" /></a>
            <a href="https://www.twitter.com/"><img src="https://banesco-prod-2020.s3.amazonaws.com/wp-content/themes/banescocontigo/assets/images/social-media/x-twitter-circle-white.svg.gzip" alt="twitter" /></a>
          </div>
        </div>
      </div>
      <div className={styles.div2}>
        <p>© 2025 StarLink</p>
      </div>
    </footer>
  );
}

export default Footer;
