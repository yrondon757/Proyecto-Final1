const NotFound = () => {
    const styles = {
      main: "w-full h-screen bg-gray-400 flex justify-center items-center text-white",
    };
    return (
      <main className={styles.main}>
        <h1><span className="text-[200px] font-bold bg-gradient-to-r from-[#19899B] via-gray-500 to-black bg-clip-text text-transparent">404</span> <span className="text-[30px]">not found!</span> </h1>
      </main>
    );
  };
  
  export default NotFound;