import { useState, useEffect } from "react";
import man from "../assets/man.jpg";
import woman from "../assets/woman.jpg";
import robot from "../assets/robot.jpg";

const EditCreate = () => {
  const [elementos, setElementos] = useState([]);
  const [elementoEditando, setElementoEditando] = useState(null);
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [genere, setGenere] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const key = "elementos";

  // Cargar elementos desde el localStorage al montar el componente
  useEffect(() => {
    const elementosStorage = localStorage.getItem(key || null);
    if (elementosStorage) {
      setElementos(JSON.parse(elementosStorage));
    }
  }, []);

  // Guardar los elementos en el localStorage cada vez que se actualiza la lista
  useEffect(() => {
    if (elementos.length > 0) {
      localStorage.setItem(key, JSON.stringify(elementos)) || [];
    }
  }, [elementos]);

  /**
   * Function to add a new element or update an existing one in the list.
   */
  const agregarElemento = () => {
    // Check if both name and description are provided
    if (!nombre || !descripcion || !genere) {
      alert("Por favor, ingresa un nombre y una descripción.");
      return;
    }

    // Create a new element with a unique id
    const nuevoElemento = {
      id: Date.now(),
      nombre,
      descripcion,
      genere,
    };

    if (elementoEditando) {
      // Update the existing element
      setElementos(
        elementos.map((elem) =>
          elem.id === elementoEditando.id
            ? { ...elem, nombre, descripcion, genere }
            : elem
        )
      );
      setElementoEditando(null); // Clear editing state
    } else {
      // Add the new element to the list
      setElementos([...elementos, nuevoElemento]);
    }

    // Reset input fields and close the modal
    setNombre("");
    setDescripcion("");
    setGenere("");
    setModalVisible(false);
  };

  const editarElemento = (elemento) => {
    setElementoEditando(elemento);
    setNombre(elemento.nombre);
    setDescripcion(elemento.descripcion);
    setGenere(elemento.genere);
    setModalVisible(true);
  };

  const eliminarElemento = (id) => {
    // Preguntar antes de eliminar
    const confirmacion = window.confirm(
      "¿Estás seguro de que quieres eliminar este elemento?"
    );
    if (confirmacion && elementos.length > 1) {
      setElementos(elementos.filter((elem) => elem.id !== id));
    } else if (elementos.length === 1) {
      alert("Debe haber al menos un elemento en la lista.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      {/* Modal para crear o editar */}
      {modalVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 transition-opacity duration-300">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 scale-100 transition-transform transform duration-300 m-6">
            <h3 className="text-xl font-semibold mb-4">
              {elementoEditando ? "Editar Elemento" : "Nuevo Elemento"}
            </h3>
            {/* Campo de entrada para nombre */}
            <div className="mb-4">
              <label htmlFor="nombre-modal">Nombre</label>
              <input
                id="nombre-modal"
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Ingrese el nombre"
                className="border p-2 rounded w-full"
              />
            </div>
            {/* Campo de entrada para descripción */}
            <div className="mb-4">
              <label htmlFor="descripcion-modal">Descripción</label>
              <input
                id="descripcion-modal"
                type="text"
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
                placeholder="Ingrese la descripción"
                className="border p-2 rounded w-full"
              />
            </div>
            {/* Campo de entrada para genere */}
            <div className="mb-4">
              <label htmlFor="genere-modal">Genere: </label>
              <select
                id="genere"
                value={genere}
                onChange={(e) => setGenere(e.target.value)}
                className="border p-2 rounded"
              >
                <option value="">Seleccione un genero</option>
                <option value="Woman">Woman</option>
                <option value="robot">Robot</option>
                <option value="man">Man</option>
              </select>
            </div>
            {/* Botones para agregar/guardar y cerrar */}
            <div className="flex justify-between">
              <button
                onClick={agregarElemento}
                className="bg-blue-500 text-white p-2 rounded"
              >
                {elementoEditando ? "Guardar" : "Agregar"}
              </button>
              <button
                onClick={() => setModalVisible(false)}
                className="bg-gray-500 text-white p-2 rounded"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Formulario de creación o edición */}
      <div className="mb-8">
        {/* Encabezado de la sección */}
        <h2 className="text-2xl font-semibold">
          {elementoEditando ? "Editar Elemento" : "Crear Nuevo Elemento"}
        </h2>
        {/* Campos de entrada para nombre y descripción */}
        <div className="grid w-full items-center gap-4 mt-4">
          <div className="flex flex-col space-y-1.5">
            {/* Campo de entrada para nombre */}
            <label htmlFor="nombre">Nombre</label>
            <input
              id="nombre"
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Ingrese el nombre"
              className="border p-2 rounded"
            />
          </div>
          <div className="flex flex-col space-y-1.5">
            {/* Campo de entrada para descripción */}
            <label htmlFor="descripcion">Descripción</label>
            <input
              id="descripcion"
              type="text"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              placeholder="Ingrese la descripción"
              className="border p-2 rounded"
            />
          </div>
          {/* Campo de entrada para genere */}
          <div className="flex flex-col space-y-1.5">
            <label htmlFor="genere">Genere</label>
            <select
              id="genere"
              value={genere}
              onChange={(e) => setGenere(e.target.value)}
              className="border p-2 rounded"
            >
              <option value="">Seleccione un genero</option>
              <option value="Woman">Woman</option>
              <option value="robot">Robot</option>
              <option value="man">Man</option>
            </select>
          </div>
        </div>

        {/* Botón para mostrar el modal */}
        <div className="mt-4">
          <button
            onClick={() => setModalVisible(true)}
            className="bg-blue-500 text-white p-2 rounded w-full transition duration-300 transform hover:scale-105"
          >
            {elementoEditando ? "Guardar Cambios" : "Agregar Elemento"}
          </button>
        </div>
      </div>

      {/* Lista de Elementos */}
      <div>
        <h3 className="text-xl font-semibold">Lista de Elementos</h3>
        <div>
          {elementos.length === 0 ? (
            <p className="text-gray-400">No hay elementos. Agrega uno nuevo.</p>
          ) : (
            // Lista de elementos en la lista
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {elementos.map((elemento) => (
                <li
                  key={elemento.id}
                  className="relative bg-gradient-to-b hover:scale-95 from-neutral-800 to-black overflow-hidden group hover:ring-1 hover:ring-white/20 transition-all flex sm:flex-col rounded-lg my-4"
                >
                  {/* Contenedor de la imagen principal y información */}
                  <div className="relative aspect-[5/3]">
                    {/* Imagen principal */}
                    <img
                      className="object-cover w-full h-full"
                      src={
                        elemento.genere === "Woman"
                          ? woman
                          : elemento.genere === "man"
                          ? man
                          : robot
                      }
                      alt="Image not found"
                    />

                    {/* Superposición de degradado */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70"></div>

                    {/* Contenido sobre la imagen */}
                    <div className="absolute inset-0 flex flex-col justify-between p-4">
                      {/* Línea decorativa superior */}
                      <div className="absolute right-0 p-3 flex items-center gap-1">
                        <div className="w-8 h-0.5 bg-white/50 rounded-full"></div>
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>

                      {/* Información del elemento */}
                      <div className="mt-auto absolute">
                        <h3 className="font-semibold text-xl text-white group-hover:text-blue-400 transition-all line-clamp-2">
                          {elemento.nombre}
                        </h3>
                        <p className="text-sm text-gray-300 mt-2 line-clamp-3">
                          {elemento.descripcion}
                        </p>
                        <p className="text-sm text-gray-300 mt-2 line-clamp-3">
                          Genere: {elemento.genere}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Botones para editar y eliminar */}
                  <div className="absolute inset-x-0 bottom-0 flex justify-between p-2 mb-2">
                    <button
                      onClick={() => editarElemento(elemento)}
                      className="bg-yellow-500 text-white p-2 rounded hover:bg-yellow-900 transition"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => eliminarElemento(elemento.id || 0)}
                      className="bg-red-500 text-white p-2 rounded hover:bg-red-900 transition"
                    >
                      Eliminar
                    </button>
                  </div>

                  {/* Línea decorativa inferior */}
                  <div className="h-2 bg-gradient-to-r from-red-500 via-red-700 to-red-900 absolute left-0 right-0 bottom-0" />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default EditCreate;
