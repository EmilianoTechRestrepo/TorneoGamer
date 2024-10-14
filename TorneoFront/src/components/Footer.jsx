// src/components/Footer.jsx

import logo1 from '../assets/institucionEducativa.png';
 import logo2 from '../assets/AsoPadres.png';
 import logo3 from '../assets/ALCALDIA.png';
 import logo4 from '../assets/turismo.png';
 import logo5 from '../assets/logoparafooter.png';
 import logo6 from '../assets/code.png';

const Footer = () => {
  return (
    <footer className="bg-white w-3xl py-6 p-6">
      <div className="container mx-auto flex justify-center space-x-6">
        {/* Enlace 1 */}
         <a href="https://link3.com" target="_blank" rel="noopener noreferrer">
          <img src={logo3} alt="Logo 3" className="h-12 object-contain" />
        </a>
       
        <a href="https://link1.com" target="_blank" rel="noopener noreferrer">
          <img src={logo1} alt="Logo 1" className="h-12 object-contain" />
        </a>

        {/* Enlace 2 */}
      <a href="https://link2.com" target="_blank" rel="noopener noreferrer">
          <img src={logo2} alt="Logo 2" className="h-12 object-contain" />
        </a> 

        
      

        {/* Enlace 4 */}
        <a href="https://link4.com" target="_blank" rel="noopener noreferrer">
          <img src={logo4} alt="Logo 4" className="h-12 object-contain" />
        </a>

        {/* Enlace 5 */}
        <a href="https://link5.com" target="_blank" rel="noopener noreferrer">
          <img src={logo5} alt="Logo 5" className="h-12 object-contain" />
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
