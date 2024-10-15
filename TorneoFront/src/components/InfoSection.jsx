import imagen2 from "../assets/imagen2.png";
import botonImagen2 from "../assets/botonImagen2.png";

const InfoSection = () => {
  return (
    <section
      className=" min-h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${imagen2})` }}
    >
      {/* Contenedor principal de los textos */}
      <div className="flex flex-col justify-center items-center  h-screen bg-opacity-50 space-y-48">
        <h2 className="text-3xl sm:text-3xl mt-12 md:text-3xl text-center lg:text-6xl font-Sixtyfour text-yellow-200 border-4 border-yellow-200 p-4 rounded-md shadow-lg">
          ¿En qué nivel estás?
        </h2>

        <h2 className="text-3xl sm:text-3xl md:text-3xl text-center lg:text-6xl font-tiny5 text-yellow-500 border-4 border-yellow-500 p-4 rounded-md shadow-lg">
          ¡VEN Y DEMUESTRA QUIÉN ERES!
        </h2>
      </div>

      {/* Botón posicionado en la parte inferior */}
      <div className="w-full flex justify-center items-center mb-1">
        <a href="#SignupSection">
          <img
            src={botonImagen2}
            alt="Boton"
            className="w-3/3 sm:w-1/2 md:w-1/1 lg:w-1/1 h-auto mx-auto rounded-lg shadow-lg"
          />
        </a>
      </div>
    </section>
  );
};

export default InfoSection;


