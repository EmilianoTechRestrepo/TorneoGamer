// src/components/Footer.jsx

import logo1 from '../assets/institucionEducativa.png';
 import logo3 from '../assets/AsoPadres.png';
 import logo2 from '../assets/ALCALDIA.png';
 import logo4 from '../assets/turismo.png';
 import logo5 from '../assets/logoparafooter.png';
 import logo6 from '../assets/code.png';
 import logo7 from '../assets/cluster.png'
import logo0 from '../assets/gobernacion.png'

const Footer = () => {
  return (
    <footer className="bg-white w-3xl py-6 p-6">
      <div className="container mx-auto flex justify-center space-x-6">
        {/* Enlace 1 */}
        <a >
          <img src={logo0} alt="Logo 8" className="h-12 object-contain" />
        </a> 
         <a >
          <img src={logo1} alt="Logo 1" className=" h-16 object-contain" />
        </a>
       
        <a >
          <img src={logo3} alt="Logo 1" className="h-12 object-contain mt-1" />
        </a>

        {/* Enlace 2 */}
      <a>
          <img src={logo2} alt="Logo 2" className="h-12 object-contain" />
        </a> 

        
      

        {/* Enlace 4 */}
        <a >
          <img src={logo4} alt="Logo 4" className="h-12 object-contain" />
        </a>

        {/* Enlace 5 */}
        <a >
          <img src={logo5} alt="Logo 5" className="h-12 object-contain" />
        </a>
<a >
          <img src={logo7} alt="Logo 7" className="h-12 object-contain" />
        </a>
        {/* Enlace 6 */}
        <a href="https://www.instagram.com/code.desarrolladoresweb?igsh=cm5rbHI3bWluYzU2&utm_source=qr" target="_blank" rel="noopener noreferrer">
          <img src={logo6} alt="Logo 6" className="h-12 object-contain" />
        </a> 

        
      </div>
    </footer>
  );
};

export default Footer;
