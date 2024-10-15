import  { useState } from "react";
import autorizacionPDF from "../assets/autorizacion.pdf";

const DownloadPDFButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex flex-col items-center space-y-4 p-14 ">
      <a
        href={autorizacionPDF} // Cambia esta ruta por la correcta del PDF
        download="autorizacion.pdf"
        className="relative neon-button bg-red-600 text-white font-bold py-2 px-4 rounded-lg mb-2 shadow-lg transition duration-300 transform hover:scale-105"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isHovered ? (
          <span className="hover-text">Descarga la Autorización</span>
        ) : (
          <span className="default-text">Importante</span>
        )}
      </a>

      <span className="text-center text-sm md:text-base  text-white font-semibold max-w-lg">
        Cada integrante del equipo menor de 18 años debe llevar este formato
        <strong> OBLIGATORIAMENTE</strong>, impreso en físico, diligenciado y
        firmado por el padre o representante legal para poder ingresar al evento.
        En caso de que no lo lleve, perderá la inscripción y no podrá participar.
      </span>
    </div>
  );
};

export default DownloadPDFButton;




