const Inicio = () => {
  const styles = {
    div: "w-full h-screen bg-[#F7F7F7] flex justify-center items-center text-black",
    div2: "w-full h-[800px] bg-gray-500 flex justify-center items-center text-black",
  };
  return (
    <main>
      <div className={styles.div}>
        <p>Inicio</p>
      </div>
      <div className={styles.div2}>
        <p>Variedad</p>
      </div>
      <div className={styles.div2}>
        <p>Presente</p>
      </div>
    </main>
  );
};

export default Inicio;
