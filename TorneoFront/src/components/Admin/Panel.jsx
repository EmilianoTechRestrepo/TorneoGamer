import { Link } from 'react-router-dom';



const PanelPage = () => {
  return (

    <div className="mb-64 pt-20 p-8"> {/* Agregado pt-20 para el margen superior */}
     
      
      <div className="grid grid-cols-1 md:grid-cols-2 font-nunito lg:grid-cols-3 gap-6 mt-14">
        <Link
          to="/panel/grupos"
          className="bg-white font-nunito border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out transform hover:scale-105 p-6 flex items-center justify-center"
        >
          <div className="text-center">
            <h2 className="text-xl font-semibold font-nunito  text-blue-500 mb-2">Listar Grupos</h2>
            <p className="text-gray-600 font-nunito ">Administra y visualiza los detalles de los Grupos</p>
          </div>
        </Link>
        
       
   
        
      </div>

    </div>
  );
};

export default PanelPage;