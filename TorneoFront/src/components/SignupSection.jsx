import imagen4 from "../assets/imagen4.png";

const SignupSection = () => {
  return (
    <section
      className="min-h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${imagen4})` }}
    >
      <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
        {/* Puedes dejar el div vacío o agregar más contenido aquí */}
      </div>
    </section>
  );
};


export default SignupSection