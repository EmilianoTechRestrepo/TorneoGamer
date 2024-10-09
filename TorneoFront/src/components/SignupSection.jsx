import  { useState } from "react";
import imagen4 from "../assets/imagen4.png";
import Modal from "./Modal";
import ParticipantsForm from "./ParticipantsForm";
import "./SignupSection.css";

const SignupSection = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [stepsCompleted, setStepsCompleted] = useState({
    regulation: false,
    participants: false,
    terms: false,
  });

  const handleOpenModal = (modalName) => setActiveModal(modalName);
  const handleCloseModal = () => setActiveModal(null);

  const completeStep = (step) => {
    setStepsCompleted((prev) => ({
      ...prev,
      [step]: true,
    }));
    handleCloseModal();
  };

  return (
    <section
      className="min-h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${imagen4})` }}
    >
      <div className="flex flex-col items-center justify-center  h-full space-y-4 ">
        {/* Botón 1: Leer Reglamento */}
        <button
          onClick={() => handleOpenModal("regulation")}
          className="neon-button"
        >
          Leer Reglamento
        </button>

        <button
          onClick={() => handleOpenModal("participants")}
          className={`neon-button ${
            stepsCompleted.regulation
              ? "cursor-pointer"
              : "cursor-not-allowed opacity-50"
          }`}
          disabled={!stepsCompleted.regulation}
        >
          Cargar Participantes
        </button>

        <button
          onClick={() => handleOpenModal("terms")}
          className={`neon-button py-2 px-4  rounded transition duration-300 ${
            stepsCompleted.participants
              ? "bg-blue-500 hover:bg-blue-600 text-white"
              : "bg-gray-500 text-gray-300 cursor-not-allowed"
          }`}
          disabled={!stepsCompleted.participants}
        >
          Aceptar Términos
        </button>

        <button
          onClick={() => handleOpenModal("payment")}
          className={`neon-button py-2 px-4 rounded transition duration-300 ${
            stepsCompleted.terms
              ? "bg-blue-500 hover:bg-blue-600 text-white"
              : "bg-gray-500 text-gray-300 cursor-not-allowed"
          }`}
          disabled={!stepsCompleted.terms}
        >
          Realizar Pago
        </button>

        {activeModal === "regulation" && (
          <Modal onClose={handleCloseModal}>
            <h2 className="text-lg font-bold mb-4">Reglamento</h2>
            <p>
              No minas No granadas (no explosivos) Solo habilidades alok, maxim,
              Kelly y moco Si se puede revivir a sus compañeros de escuadra No
              doble vector No vss No autos No explosivos son todas las armas que
              tienen daño en área Cómo granada de humo, granada, granada
              aturdimiento No m79
            </p>
            <button
              onClick={() => completeStep("regulation")}
              className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300"
            >
              He leído y entiendo
            </button>
          </Modal>
        )}

        {activeModal === "participants" && (
          <Modal onClose={handleCloseModal}>
            <h2 className="text-lg font-bold mb-4">Cargar Participantes</h2>
            <ParticipantsForm
              onSubmit={(participants) => {
                console.log(participants);
                completeStep("participants");
              }}
            />
          </Modal>
        )}

        {activeModal === "terms" && (
          <Modal onClose={handleCloseModal}>
            <h2 className="text-lg font-bold mb-4">Términos y Condiciones</h2>
            <p>
              Términos y Condiciones del Concurso Gamer 1. Descripción del
              Concurso: El presente concurso gamer está organizado en el marco
              de un evento colegial, destinado a estudiantes de 8 años en
              adelante. El objetivo es promover el entretenimiento y la
              competencia saludable entre los participantes, dentro de un
              entorno seguro y controlado. 2. Requisitos de Participación: • El
              concurso está abierto a estudiantes de 8 años o más,
              pertenecientes a instituciones educativas del municipio donde se
              organiza el evento, así como de municipios aledaños. • Los menores
              de edad que deseen participar deben contar con la autorización
              expresa de sus padres o tutores legales para inscribirse y
              participar en el concurso. 3. Autorización Parental: • Al aceptar
              estos Términos y Condiciones, los participantes menores de edad
              certifican que cuentan con la autorización de sus padres o tutores
              legales para participar en el concurso. • Los padres o tutores
              legales reconocen que han sido informados de la participación de
              sus hijos y que no tienen inconveniente alguno con dicha
              participación. 4. Responsabilidad del Organizador: • El
              organizador del concurso gamer se compromete a garantizar un
              entorno adecuado y seguro para todos los participantes, y a
              asegurar que los juegos involucrados sean apropiados para sus
              edades. • El organizador no será responsable de daños personales,
              materiales o cualquier perjuicio derivado de la participación,
              salvo que se deba a negligencia grave del organizador. 5. Uso de
              Datos Personales: • Los datos de los participantes y de sus padres
              o tutores serán tratados de acuerdo con la legislación vigente en
              materia de protección de datos personales. La información recabada
              se utilizará exclusivamente para la gestión del concurso y no se
              compartirá con terceros sin autorización previa. 6. Aceptación de
              los Términos: • Al registrarse en el concurso, los participantes y
              sus padres o tutores legales aceptan íntegramente estos Términos y
              Condiciones. Cualquier incumplimiento puede resultar en la
              descalificación del participante. 7. Modificaciones: • El
              organizador se reserva el derecho de modificar estos Términos y
              Condiciones en cualquier momento, con la debida notificación a los
              participantes y sus padres o tutores. 8. Contacto: • Para
              cualquier consulta, los participantes o sus padres pueden
              contactar al organizador a través de Leidy Marcela Pabon Baquero
              3142051341. Al aceptar estos Términos y Condiciones, los
              participantes certifican que cuentan con la debida autorización de
              sus padres o tutores legales, y entienden y aceptan todas las
              disposiciones aquí contenidas.
            </p>
            <button
              onClick={() => completeStep("terms")}
              className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300"
            >
              Aceptar Términos
            </button>
          </Modal>
        )}

        {activeModal === "payment" && (
          <Modal onClose={handleCloseModal}>
            <h2 className="text-lg font-bold mb-4">Realizar Pago</h2>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="neon-button py-2 px-4 rounded hover:bg-green-600 transition duration-300"
            >
              Ir a Página de Pago
            </a>
          </Modal>
        )}
      </div>
    </section>
  );
};

export default SignupSection;

