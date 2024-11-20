import { useState, useEffect } from "react";
import notFound from "../assets/slide4.jpg";

const EditCreate = () => {
  const [elementos, setElementos] = useState([]);
  const [elementoEditando, setElementoEditando] = useState(null);
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
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
    if (!nombre || !descripcion) {
      alert("Por favor, ingresa un nombre y una descripción.");
      return;
    }

    // Create a new element with a unique id
    const nuevoElemento = {
      id: Date.now(),
      nombre,
      descripcion,
    };

    if (elementoEditando) {
      // Update the existing element
      setElementos(
        elementos.map((elem) =>
          elem.id === elementoEditando.id
            ? { ...elem, nombre, descripcion }
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
    setModalVisible(false);
  };

  const editarElemento = (elemento) => {
    setElementoEditando(elemento);
    setNombre(elemento.nombre);
    setDescripcion(elemento.descripcion);
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
        <h2 className="text-2xl font-semibold">
          {elementoEditando ? "Editar Elemento" : "Crear Nuevo Elemento"}
        </h2>
        <div className="grid w-full items-center gap-4 mt-4">
          <div className="flex flex-col space-y-1.5">
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
        </div>
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
            <ul className="max-w-md min-h-72 grid grid-cols-2 md:grid-cols-3 md:max-w-2xl gap-4 mt-4">
              {elementos.map((elemento) => (
                <li
                  key={elemento.id}
                  className="relative bg-gradient-to-b hover:scale-95 from-neutral-800 to-black overflow-hidden group hover:ring-1 hover:ring-white/20 transition-all flex sm:flex-col rounded-lg"
                >
                  <div className="relative aspect-[5/3] z-0">
                    {/* Imagen principal con ajustes responsivos */}
                    <img
                      className="w-full h-56 object-cover"
                      src={notFound}
                      alt="Image not found"
                    />
                    {/* Superposición de degradado */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60" />

                    {/* Contenido sobre la imagen */}
                    <div className="absolute inset-0 flex flex-col justify-between p-4 z-10">
                      {/* Línea decorativa superior */}
                      <div className="flex items-center gap-1 pb-4">
                        <div className="w-6 h-0.5 bg-white/50 rounded-full" />
                        <div className="w-1 h-1 bg-white rounded-full" />
                      </div>

                      {/* Información del elemento */}
                      <div className="space-y-1 sm:flex-1 ">
                        <h3 className="font-bold text-lg leading-tight text-white group-hover:text-blue-400 transition-colors line-clamp-2 break-words">
                          {elemento.nombre}
                        </h3>
                        <p className="break-words text-xs pb-14 md:pb-0 text-gray-400 uppercase ">
                          {elemento.descripcion}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 flex justify-between p-2 mb-2">
                    <button
                      onClick={() => editarElemento(elemento)}
                      className="bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600 transition"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => eliminarElemento(elemento.id || 0)}
                      className="bg-red-500 text-white p-2 rounded hover:bg-red-600 transition"
                    >
                      Eliminar
                    </button>
                  </div>

                  <div className="h-1 bg-gradient-to-r from-red-500 via-red-700 to-red-900 absolute left-0 right-0 bottom-0" />
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
