import imagen3 from "../assets/imagen3.png";
import boton1de3 from "../assets/boton1de3.png";
import boton2de3 from "../assets/boton2de3.png";
import boton3de3 from "../assets/boton3de3.png";

const GallerySection = () => {
  return (
    <section
      className="min-h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${imagen3})` }}
    >
      {/* Primer botón con borde blanco y sombra */}
      <div className="w-full flex items-center mb-1 opacity-90 mt-1">
        <img
          src={boton1de3}
          alt="Boton1"
          className="w-1/3 h-20% rounded-lg object-cover mt-80  "
        />
      </div>

      {/* Segundo botón con borde blanco y sombra */}
      <div className="w-full flex items-center mb-1 opacity-90">
        <img
          src={boton2de3}
          alt="Boton2"
          className="w-1/3 h-20% rounded-lg object-cover "
        />
      </div>

      {/* Tercer botón con borde blanco y sombra */}
      <div className="w-full flex items-center mb-1 opacity-80">
        <img
          src={boton3de3}
          alt="Boton3"
          className="w-1/3 h-20% rounded-lg object-cover  "
        />
      </div>
    </section>
  );
};

export default GallerySection;
