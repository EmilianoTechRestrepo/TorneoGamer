import imagen1 from "../assets/imagen1.png";
import free from "../assets/free.png";
import boton from "../assets/boton.png";


const HeaderSection = () => {
  return (
    <section
      className="min-h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${imagen1})` }}
    >
      {/* Primer título */}
      <div className="flex items-center justify-center h-full bg-opacity-50">
        <h2 className="text-3xl sm:text-3xl md:text-3xl lg:text-3xl font-Sixtyfour mt-16 text-white md:justify-center">
          Primer Torneo
        </h2>
      </div>

      {/* Título principal */}
      <div className="w-full flex justify-center items-center mb-4">
        <h2 className="text-6xl sm:text-8xl md:text-9xl lg:text-[10vw] font-tiny5 mt-8 mb-4 text-yellow-500">
          GAMER
        </h2>
      </div>

      {/* Imagen centrada */}
      <div className="w-full flex justify-center items-center mb-4">
      
        <img
          src={free}
          alt="Free"
          className="w-4/5 h-auto rounded-lg object-cover shadow-lg"
        />
      </div>
      

      {/* Subtítulo */}
      <div className="flex items-center justify-center h-full bg-opacity-50">
        <h2 className="text-3xl sm:text-1xl md:text-3xl lg:text-7xl font-Sixtyfour mt-6 mb-4 text-white">
          Emiliano Tech
        </h2>
      </div>

     <div className="w-full flex justify-center items-center mb-1 ">
     <a href="#SignupSection">
        <img
          src={boton}
          alt="Boton"
          className=" h-auto rounded-lg shadow-lg"
        />

        </a>
      </div>
      
    </section>
  );
};

export default HeaderSection;

