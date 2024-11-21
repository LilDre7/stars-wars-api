import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { buttonlogin } from "../services/data";
import { Eye } from "lucide-react";
import logo from "../assets/logo.png";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Asegúrate de importar los estilos de Toastify

const Login = () => {
  const [isLogin, setIsLogin] = useState(true); // Para alternar entre login y registro
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      const validateEmail = () => {
        const emailRegex = /\S+@\S+\.\S+/;
        if (!emailRegex.test(email)) {
          toast.error("Por favor ingresa un email válido");
          return false;
        }
        return true;
      };

      const validatePassword = () => {
        if (password.length < 6) {
          toast.error("La contraseña debe tener al menos 6 caracteres");
          return false;
        }
        return true;
      };

      if (validateEmail() && validatePassword()) {
        try {
          const user = JSON.parse(localStorage.getItem("user")) || [];
          if (isLogin) {
            if (user && user.email === email && user.password === password) {
              localStorage.setItem("isAuthenticated", true); // Marcar como autenticado
              navigate("/home"); // Redirigir a Home si el login es exitoso
              toast.success("Inicio de sesión exitoso");
            } else {
              throw new Error("Credenciales incorrectas");
            }
          } else if (user && user.email === email) {
            throw new Error("El email ya está registrado");
          } else {
            // Registro: Guardar el nuevo usuario en localStorage
            const newUser = { email, password };
            localStorage.setItem("user", JSON.stringify(newUser)) || [];
            navigate("/"); // Redirigir a Home después de registrar
            toast.success("Registro exitoso");
          }
        } catch (error) {
          toast.error(error.message);
        }
      }

      setLoading(false);
    }, 1000);
  };

  // Lógica para ver el password
  const togglePasswordVisibility = () => {
    const passwordInput = document.getElementById("password");
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
    } else {
      passwordInput.type = "password";
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Sección izquierda - Imagen de fondo y estilo */}
      <div className="min-h-screen md:w-1/2 bg-login bg-cover opacity-90 text-black font-bold flex-col justify-center items-center p-6 md:p-12 hidden md:flex"></div>

      {/* Sección derecha - Contenido principal */}
      <div className="md:w-1/2 flex flex-col justify-center items-center p-6 md:p-12 min-h-screen bg-home bg-cover opacity-90 text-black font-bold">
        {/* Logo en la parte superior */}
        <a href="/" className="mx-auto mb-5">
          <img className="w-44" src={logo} alt="" />
        </a>

        {/* Sección del formulario */}
        <section className="w-full max-w-xs p-6 space-y-4 bg-white rounded-lg shadow-md">
          {/* Título del formulario */}
          <h2 className="text-center text-lg font-semibold text-black mb-4">
            {isLogin ? "Log in to continue" : "Sign up to get started"}
          </h2>

          {/* Formulario de inicio de sesión o registro */}
          <form onSubmit={handleSubmit} className="space-y-4 bg-white">
            {/* Campo de entrada de correo electrónico */}
            <div>
              <label htmlFor="email" className="sr-only">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="font-normal w-full px-4 py-2 bg-transparent border border-gray-600 rounded-lg text-black placeholder-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="alvaroaburto71@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            {/* Campo de entrada de contraseña */}
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  className="font-normal w-full px-4 py-2 bg-transparent border border-gray-600 rounded-lg text-black placeholder-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Password (6+ characters)"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                {/* Botón para alternar visibilidad de la contraseña */}
                <button
                  type="button"
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-blue-600"
                  onClick={togglePasswordVisibility}
                >
                  <Eye className="w-5 h-5" />
                </button>
              </div>
            </div>
            {/* Enlace para recuperación de contraseña */}
            <div className="text-right">
              <button className="text-xs text-blue-400 hover:underline focus:outline-none">
                Forgot password?
              </button>
            </div>
            {/* Botón para enviar el formulario */}
            <button
              type="submit"
              className="w-full py-2 bg-blue-600 text-white font-medium text-sm rounded-lg hover:bg-blue-500 transition focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-1"
              disabled={loading}
            >
              {loading ? "Loading..." : isLogin ? "Continue" : "Sign up"}
            </button>
          </form>

          {/* Separador visual de opciones */}
          <div className="my-5 flex items-center justify-center text-gray-500 text-xs">
            <div className="w-full h-px bg-gray-600"></div>
            <span className="px-3">OR</span>
            <div className="w-full h-px bg-gray-600"></div>
          </div>

          {/* Botones de login alternativos */}
          <div className="space-y-3">
            {buttonlogin.map((item, index) => (
              <button
                key={index}
                className="w-full py-2 flex items-center justify-center bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <span className="mr-2">{item.icon || ""}</span>
                {item.name}
              </button>
            ))}
          </div>

          {/* Enlace para alternar entre login y registro */}
          <div className="text-center mt-5 text-xs text-black font-medium">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button
              className="text-blue-400 text-sm hover:underline focus:outline-none"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? "Sign up" : " Log in"}
            </button>
          </div>
        </section>
      </div>

      {/* Toast container para mostrar las notificaciones */}
      <ToastContainer />
    </div>
  );
};

export default Login;
