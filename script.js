const cursos = document.querySelectorAll('.materia');
const estadoCursos = {};

cursos.forEach(curso => {
  const nombre = curso.getAttribute('data-nombre');
  const requisitos = curso.getAttribute('data-requisitos')?.split(',').map(r => r.trim()).filter(Boolean) || [];

  const boton = curso.querySelector('button');
  boton.addEventListener('click', () => {
    // Alternar el estado del curso
    estadoCursos[nombre] = !estadoCursos[nombre];
    actualizarCurso(curso, estadoCursos[nombre]);

    // Actualizar el estado de todos los cursos en base a los nuevos estados
    actualizarDesbloqueos();
  });

  // Estado inicial
  estadoCursos[nombre] = false;
  actualizarCurso(curso, false);
});

function actualizarCurso(curso, aprobado) {
  const estado = curso.querySelector('.estado');
  if (aprobado) {
    estado.textContent = 'Aprobado';
    estado.classList.add('aprobado');
    curso.classList.remove('bloqueado');
  } else {
    estado.textContent = 'No aprobado';
    estado.classList.remove('aprobado');
    curso.classList.add('bloqueado');
  }
}

function actualizarDesbloqueos() {
  cursos.forEach(curso => {
    const nombre = curso.getAttribute('data-nombre');
    const requisitos = curso.getAttribute('data-requisitos')?.split(',').map(r => r.trim()).filter(Boolean) || [];
    
    const desbloqueado = requisitos.every(req => estadoCursos[req]);
    if (!estadoCursos[nombre]) {
      curso.classList.toggle('bloqueado', !desbloqueado);
    }
  });
}
