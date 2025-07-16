const cursos = [
  { nombre: "Curso integrado de humanidades I", id: "hum1", requisitos: [] },
  { nombre: "Repertorio", id: "rep", requisitos: [] },
  { nombre: "Curso de Arte", id: "arte", requisitos: [] },
  { nombre: "Introduccion a la administración de negocios", id: "admin1", requisitos: [] },
  { nombre: "Precálculo", id: "precalculo", requisitos: [] },
  { nombre: "Introducción a la economía", id: "eco1", requisitos: [] },
  { nombre: "Curso integrado de humanidades II", id: "hum2", requisitos: ["hum1"] },
  { nombre: "Actividad deportiva", id: "deporte", requisitos: [] },
  { nombre: "Aplicaciones ofimáticas para la toma de decisiones", id: "ofimatica", requisitos: [] },
  { nombre: "Contabilidad básica", id: "conta1", requisitos: ["admin1"] },
  { nombre: "Calculo para ciencias economicas I", id: "calculo1", requisitos: ["precalculo"] },
  { nombre: "Administración de proyectos y herramientas para el análisis de datos", id: "proyectos", requisitos: ["ofimatica"] },
  { nombre: "Estadística general I", id: "estad1", requisitos: ["calculo1"] },
  { nombre: "Contabilidad Intermedia I", id: "conta2", requisitos: ["conta1"] },
  { nombre: "Matemática financiera", id: "matfin", requisitos: ["calculo1"] },
  { nombre: "Cálculo para ciencias economicas II", id: "calculo2", requisitos: ["calculo1"] },
  { nombre: "Metodología de la investigación", id: "metodologia", requisitos: ["estad1"] },
  { nombre: "Estadística general II", id: "estad2", requisitos: ["estad1", "calculo2"] },
  { nombre: "Elementos fundamentales de legislación empresarial", id: "leyemp", requisitos: ["admin1"] },
  { nombre: "Contabilidad intermedia II", id: "conta3", requisitos: ["conta2", "matfin"] },
  { nombre: "Seminario de realidad nacional I", id: "semrn1", requisitos: ["hum2"] },
  { nombre: "Administración financiera I", id: "fin1", requisitos: ["matfin"] },
  { nombre: "Métodos cuantitativos para la toma de decisiones I", id: "mq1", requisitos: ["fin1", "estad2"] },
  { nombre: "Administración financiera II", id: "fin2", requisitos: ["fin1", "estad2"] },
  { nombre: "Legislación comercial, bancaria y financiera", id: "leycom", requisitos: ["leyemp"] },
  { nombre: "Principios de mercadeo", id: "mercadeo", requisitos: ["conta1", "eco1"] },
  { nombre: "Principios de gerencia", id: "gerencia", requisitos: ["fin1"] },
  { nombre: "Economía y comercio internacional", id: "eco2", requisitos: ["eco1", "estad1"] },
  { nombre: "Gestion del talento y conocimiento humano", id: "talento", requisitos: ["gerencia"] },
  { nombre: "Seminario de realidad nacional II", id: "semrn2", requisitos: ["semrn1"] },
  { nombre: "Métodos cuantitativos para la toma de decisiones II", id: "mq2", requisitos: ["mq1"] },
  { nombre: "Legislación laboral", id: "leylab", requisitos: ["leycom"] },
  { nombre: "Publicidad y promoción", id: "publicidad", requisitos: ["mercadeo"] },
  { nombre: "Administración financiera III", id: "fin3", requisitos: ["fin2"] },
  { nombre: "Gerencia de operaciones", id: "operaciones", requisitos: ["mq2"] },
  { nombre: "Emprendimiento y creación de empresas", id: "emprende", requisitos: ["talento"] },
  { nombre: "Investigación de mercados", id: "invmercado", requisitos: ["publicidad"] },
  { nombre: "Liderazgo general", id: "liderazgo", requisitos: ["talento"] },
  { nombre: "Formulación y evaluación de proyectos I", id: "proy1", requisitos: ["fin2"] },
  { nombre: "Legislación tributaria y aduanera", id: "leytri", requisitos: ["conta3", "leylab"] },
  { nombre: "Gestion de la innovación y estrategia competitiva", id: "innovacion", requisitos: ["talento"] },
  { nombre: "Mercados bursátiles", id: "bursatil", requisitos: ["proy1"] },
  { nombre: "Principios de auditoría financiera", id: "auditoria", requisitos: ["conta3", "fin3"] },
  { nombre: "Gerencia de calidad", id: "calidad", requisitos: ["operaciones"] },
  { nombre: "Ventas y distribución", id: "ventas", requisitos: ["invmercado"] },
  { nombre: "Estrategias y tácticas de negociación", id: "negociacion", requisitos: ["innovacion"] },
  { nombre: "Administración mediada por tecnologías de la información", id: "adminTI", requisitos: ["calidad"] },
  { nombre: "Comunicación intercultural de los negocios", id: "comunicacion", requisitos: ["operaciones"] },
  { nombre: "Taller de investigación", id: "taller", requisitos: ["adminTI"] },
];

const malla = document.getElementById("malla");
const estado = {}; // Guardará si el curso fue aprobado

function render() {
  malla.innerHTML = "";
  cursos.forEach(curso => {
    const div = document.createElement("div");
    div.className = "ramo" + (estado[curso.id] ? " aprobado" : "");
    div.id = curso.id;

    const titulo = document.createElement("h3");
    titulo.textContent = curso.nombre;
    div.appendChild(titulo);

    const btn = document.createElement("button");
    btn.textContent = estado[curso.id] ? "Aprobado" : "Aprobar ramo";
    btn.disabled = estado[curso.id] || !curso.requisitos.every(req => estado[req]);

    btn.addEventListener("click", () => {
      estado[curso.id] = true;
      render();
    });

    div.appendChild(btn);
    malla.appendChild(div);
  });
}

render();

