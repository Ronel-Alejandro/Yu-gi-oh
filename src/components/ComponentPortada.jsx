import React from "react";

function ComponentPortada() {
  const textStyle = {
    fontFamily: 'Arial, sans-serif',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: '2rem',
    textAlign: 'center',
    letterSpacing: '0.1rem',
    lineHeight: '1.5',
  };

  return (
    <div className="relative w-screen h-screen">
      <img
        src="/src/assets/fondo.jpg"
        alt=""
        className="w-screen h-screen object-cover"
      />
      <div className="absolute inset-0 bg-gray-900 bg-opacity-50"></div>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
        <div style={textStyle}>
          <p>Nombre de la escuela:</p>
          <p>Universidad Tecnologica Metropolitana</p>
        </div>
        <div style={textStyle}>
          <p>Asignatura:</p>
          <p>Aplicaciones web</p>
        </div>
        <div style={textStyle}>
          <p>Nombre de la maestra:</p>
          <p>Ruth Martínez Domínguez</p>
        </div>
        <div style={textStyle}>
          <p>Nombre del Alumno:</p>
          <p>Ronel Alejandro Caamal Casanova</p>
        </div>
        <div style={textStyle}>
          <p>Grado y Grupo:</p>
          <p>5-A</p>
        </div>
      </div>
    </div>
  );
}

export default ComponentPortada;
