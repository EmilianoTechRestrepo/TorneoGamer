import logo1 from "../assets/institucionEducativa.png";
import logo3 from "../assets/AsoPadres.png";
import logo2 from "../assets/ALCALDIA.png";
//import logo4 from "../assets/turismo.png";
import logo5 from "../assets/logoparafooter.png";
import logo6 from "../assets/code.png";
import logo7 from "../assets/cluster.png";
import logo0 from "../assets/gobernacion.png";

const Footer = () => {
  return (
    <footer className="bg-white py-6">
      <div className="container mx-auto flex flex-wrap justify-center items-center space-x-6">
        {/* Logos */}
        <a>
          <img src={logo0} alt="Logo Gobernación" className="h-16 md:h-20 lg:h-24 object-contain" />
        </a>
        <a>
          <img src={logo1} alt="Logo Institución Educativa" className="h-16 md:h-20 lg:h-24 object-contain" />
        </a>
        <a>
          <img src={logo3} alt="Logo AsoPadres" className="h-16 md:h-20 lg:h-24 object-contain" />
        </a>
        <a>
          <img src={logo2} alt="Logo Alcaldía" className="h-12 md:h-20 lg:h-20 object-contain" />
        </a>
        
        <a>
          <img src={logo5} alt="Logo para Footer" className="h-16 md:h-20 lg:h-24 object-contain" />
        </a>
        <a>
          <img src={logo7} alt="Logo Cluster" className="h-16 md:h-20 lg:h-24 object-contain" />
        </a>
        {/* Link externo con logo */}
        <a
          href="https://www.instagram.com/code.desarrolladoresweb?igsh=cm5rbHI3bWluYzU2&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={logo6} alt="Logo Code" className="h-6 md:h-18 lg:h-10 object-contain" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;


