// ============================================================
// ARCHIVO: src/assets/data/1998/CandidatosData.js
// ============================================================

const imageModules = import.meta.glob('../../img/**/*.{png,jpg,jpeg,svg}', {
  eager: false
});

const img = (path) => {
  const fullPath = `../../img/${path}`;
  const loader = imageModules[fullPath];

  if (loader) {
    return async () => {
      const mod = await loader();
      return mod.default;
    };
  }

  console.warn(`⚠️ Imagen no encontrada en glob: ${path}`);
  return async () => "";
};

// ============================================================
// 1. LEYENDA DE COLORES
// ============================================================
export const dessertsData = [
  { porcentaje: "Nivel Bajo",
    p1: "#ffb3b3", // Rojo claro para zonas con pocos votos
    p2: "#FFB3B3", // Rojo muy claro
    p3: "#F8B3E1",
    p4: "#f5c89a",
    p5: "#ccffdd", // Verde Democracia Popular claro
    p6: "#3e9ad6", // color exacto del partido Movimiento Ciudadanos Nuevo País
    p7: '#b4e3a8',
    p8: '#f8b8b8' 
  },
  { porcentaje: "Nivel Medio",
    p1: "#ff4d4d", // Rojo de intensidad media
    p2: "#FF4D4D", // Rojo de intensidad media
    p3: "#F06BC0",
    p4: "#f5900a",
    p5: "#66ff99", // Verde intermedio
    p6: "#7dbde3", // versión ligeramente más clara
    p7: '#68c153', 
    p8: '#ef6b6c'  
  },
  { porcentaje: "Nivel Alto",
    p1: "#ff0000", // Rojo oscuro/puro oficial del PRE
    p2: "#CC0000", // Rojo oscuro (Color principal del MPD)
    p3: "#E00B97",
    p4: "#c46a00",
    p5: "#00994c", // Verde institucional oficial fuerte
    p6: "#c0e2f5", // versión pastel, mucho más clara
    p7: '#2ca311', 
    p8: '#e31a1c'  
  }
];

// ============================================================
// 2. DICCIONARIO DE CANDIDATOS
// ============================================================
export const candidatoData = [
  {    
    partido: 1,
    nombre: "ÁLVARO NOBOA PONTÓN",
    url: img("imagenes_presidentes/1998/alvaro_noboa_pre_1998.png"),
    logo: img("logos_partidos_politicos/1998/pre_1998.png"),
    color: "#ff0000", 
    nombrePartido: "COMPLETAR", // este candidato pertenece al partido PRE
    json: "COMPLETAR"
  },
  {
    partido: 2,
    nombre: "MARIA EUGENIA LIMA",
    url: img("imagenes_presidentes/1998/MaríaEugeniaLima_1998.png"),
    logo: img("logos_partidos_politicos/1998/MovimientoPopularDemocrático_1998.png"),
    color: "#CC0000",
    nombrePartido: "COMPLETAR", // este candidato pertenece al Movimiento Popular Democrático (MPD)
    json: "COMPLETAR"
  },
  {
    partido: 3,
    nombre: "ROSALIA ARTEAGA",
    url: img("imagenes_presidentes/1998/ROSALIAARTEAGA_1998.png"),
    logo: img("logos_partidos_politicos/1998/MIRA_1998.png"),
    color: "#E00B97",
    nombrePartido: "COMPLETAR", //EL candidato pertenece al partido MIRA
    json: "COMPLETAR"
  },
  {
    partido: 4,
    nombre: "RODRIGO BORJA CEVALLOS",
    url: img("imagenes_presidentes/1998/candidato_004.png"),
    logo: img("logos_partidos_politicos/1998/ID_1998.png"),
    color: "#c46a00",
    nombrePartido: "COMPLETAR",//este candidato pertenece al partido ID
    json: "COMPLETAR"
  },
    {
    partido: 5,
    nombre: "JAMIL MAHUAD WITT", // Nombre real del candidato
    url: img("imagenes_presidentes/1998/mahuad.png"),
    logo: img("logos_partidos_politicos/1998/democracia_popular_1998.png"),
    color: "#00994c", // Color principal investigado (Verde DP)
    nombrePartido: "DP", // este candidato pertenece al partido Democracia Popular (DP)
    json: "DP",
  },
  {
    partido: 6,
    nombre: "FREDDY ARTURO EHLERS ZURITA",
    url: img("imagenes_presidentes/1998/candidato_021.png"),
    logo: img("logos_partidos_politicos/1998/partido_021.png"),
    color: "#3e9ad6", // color oficial del partido Movimiento Ciudadanos Nuevo País (MCNP)
    nombrePartido: "COMPLETAR", // este candidato pertenece al partido Movimiento Ciudadanos Nuevo País (MCNP) - Lista 21
    json: "COMPLETAR",
  },
  {
    partido: 7,
    nombre: "MAHUAD JAMIL",
    url: img("imagenes_presidentes/1998/JamilMahuad_1998.png"),
    logo: img("logos_partidos_politicos/1998/Democracia_Popular_1998.png"),
    color: "#2ca311",
    nombrePartido: "COMPLETAR", // Democracia Popular
    json: "COMPLETAR"
  },
  {
    partido: 8,
    nombre: "NOBOA ALVARO",
    url: img("imagenes_presidentes/1998/ALVARONOBOA_1998.png"),
    logo: img("logos_partidos_politicos/1998/Partido_Roldosista_Ecuatoriano_1998.png"),
    color: "#e31a1c",
    nombrePartido: "COMPLETAR", // Partido Roldosista Ecuatoriano
    json: "COMPLETAR"
  },
  {
    partido: 99,
    nombre: "EMPATE",
    url: "",
    logo: "",
    color: "#808080",
    nombrePartido: "EMPATE",
    json: "EMPATE"
  }
];
