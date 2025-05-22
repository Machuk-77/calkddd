function mostrarFormulario() {
  const tipo = document.getElementById("selectorMagnitud").value;
  const contenedor = document.getElementById("formularioOperacion");
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = "";

  const crearCampo = (label, id) => `
    <label for="${id}">${label}</label>
    <input type="number" id="${id}" required>
  `;

  let html = "";

  switch (tipo) {
    case "velocidad":
      html = crearCampo("Distancia (m)", "distancia") +
             crearCampo("Tiempo (s)", "tiempo") +
             `<button onclick="calcularVelocidad()">Calcular</button>`;
      break;

    case "aceleracion":
      html = crearCampo("Velocidad final (m/s)", "vf") +
             crearCampo("Velocidad inicial (m/s)", "vi") +
             crearCampo("Tiempo (s)", "tiempo") +
             `<button onclick="calcularAceleracion()">Calcular</button>`;
      break;

    case "fuerza":
      html = crearCampo("Masa (kg)", "masa") +
             crearCampo("Aceleración (m/s²)", "aceleracion") +
             `<button onclick="calcularFuerza()">Calcular</button>`;
      break;

    case "trabajo":
      html = crearCampo("Fuerza (N)", "fuerza") +
             crearCampo("Distancia (m)", "distancia") +
             `<button onclick="calcularTrabajo()">Calcular</button>`;
      break;

    case "potencia":
      html = crearCampo("Trabajo (J)", "trabajo") +
             crearCampo("Tiempo (s)", "tiempo") +
             `<button onclick="calcularPotencia()">Calcular</button>`;
      break;

    case "presion":
      html = crearCampo("Fuerza (N)", "fuerza") +
             crearCampo("Área (m²)", "area") +
             `<button onclick="calcularPresion()">Calcular</button>`;
      break;

    case "densidad":
      html = crearCampo("Masa (kg)", "masa") +
             crearCampo("Volumen (m³)", "volumen") +
             `<button onclick="calcularDensidad()">Calcular</button>`;
      break;

    case "energiaCinetica":
      html = crearCampo("Masa (kg)", "masa") +
             crearCampo("Velocidad (m/s)", "velocidad") +
             `<button onclick="calcularEnergiaCinetica()">Calcular</button>`;
      break;

    case "energiaPotencial":
      html = crearCampo("Masa (kg)", "masa") +
             crearCampo("Altura (m)", "altura") +
             `<button onclick="calcularEnergiaPotencial()">Calcular</button>`;
      break;

    case "leyOhm":
      html = crearCampo("Voltaje (V)", "voltaje") +
             crearCampo("Resistencia (Ω)", "resistencia") +
             `<button onclick="calcularCorriente()">Calcular</button>`;
      break;

    default:
      html = "";
  }

  contenedor.innerHTML = html;
}

// Funciones de cálculo
function calcularVelocidad() {
  const d = +document.getElementById("distancia").value;
  const t = +document.getElementById("tiempo").value;
  mostrarResultado("Velocidad", d / t, "m/s");
}

function calcularAceleracion() {
  const vf = +document.getElementById("vf").value;
  const vi = +document.getElementById("vi").value;
  const t = +document.getElementById("tiempo").value;
  mostrarResultado("Aceleración", (vf - vi) / t, "m/s²");
}

function calcularFuerza() {
  const m = +document.getElementById("masa").value;
  const a = +document.getElementById("aceleracion").value;
  mostrarResultado("Fuerza", m * a, "N");
}

function calcularTrabajo() {
  const f = +document.getElementById("fuerza").value;
  const d = +document.getElementById("distancia").value;
  mostrarResultado("Trabajo", f * d, "J");
}

function calcularPotencia() {
  const w = +document.getElementById("trabajo").value;
  const t = +document.getElementById("tiempo").value;
  mostrarResultado("Potencia", w / t, "W");
}

function calcularPresion() {
  const f = +document.getElementById("fuerza").value;
  const a = +document.getElementById("area").value;
  mostrarResultado("Presión", f / a, "Pa");
}

function calcularDensidad() {
  const m = +document.getElementById("masa").value;
  const v = +document.getElementById("volumen").value;
  mostrarResultado("Densidad", m / v, "kg/m³");
}

function calcularEnergiaCinetica() {
  const m = +document.getElementById("masa").value;
  const v = +document.getElementById("velocidad").value;
  mostrarResultado("Energía Cinética", 0.5 * m * v * v, "J");
}

function calcularEnergiaPotencial() {
  const m = +document.getElementById("masa").value;
  const h = +document.getElementById("altura").value;
  const g = 9.8;
  mostrarResultado("Energía Potencial", m * g * h, "J");
}

function calcularCorriente() {
  const v = +document.getElementById("voltaje").value;
  const r = +document.getElementById("resistencia").value;
  mostrarResultado("Corriente", v / r, "A");
}

function mostrarResultado(etiqueta, valor, unidad) {
  document.getElementById("resultado").innerHTML = `${etiqueta}: ${valor.toFixed(2)} ${unidad}`;
}
