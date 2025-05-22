function mostrarFormulario() {
  const seleccion = document.getElementById("selectorMagnitud").value;
  const contenedor = document.getElementById("formularioOperacion");

  contenedor.innerHTML = ""; // Limpia el anterior

  if (seleccion === "") return;

  let html = "";

  switch (seleccion) {
    case "velocidad":
      html = `
        <h3>Velocidad</h3>
        <label>Distancia (m): <input id="distancia" type="number"></label>
        <label>Tiempo (s): <input id="tiempo" type="number"></label>
        <button onclick="calcularVelocidad()">Calcular</button>
        <p id="resultado"></p>
      `;
      break;
    case "aceleracion":
      html = `
        <h3>Aceleración</h3>
        <label>Velocidad Final (m/s): <input id="vf" type="number"></label>
        <label>Velocidad Inicial (m/s): <input id="vi" type="number"></label>
        <label>Tiempo (s): <input id="tiempoA" type="number"></label>
        <button onclick="calcularAceleracion()">Calcular</button>
        <p id="resultado"></p>
      `;
      break;
    case "fuerza":
      html = `
        <h3>Fuerza</h3>
        <label>Masa (kg): <input id="masaF" type="number"></label>
        <label>Aceleración (m/s²): <input id="aceleracionF" type="number"></label>
        <button onclick="calcularFuerza()">Calcular</button>
        <p id="resultado"></p>
      `;
      break;
    case "trabajo":
      html = `
        <h3>Trabajo</h3>
        <label>Fuerza (N): <input id="fuerzaT" type="number"></label>
        <label>Distancia (m): <input id="distanciaT" type="number"></label>
        <button onclick="calcularTrabajo()">Calcular</button>
        <p id="resultado"></p>
      `;
      break;
    case "potencia":
      html = `
        <h3>Potencia</h3>
        <label>Trabajo (J): <input id="trabajoP" type="number"></label>
        <label>Tiempo (s): <input id="tiempoP" type="number"></label>
        <button onclick="calcularPotencia()">Calcular</button>
        <p id="resultado"></p>
      `;
      break;
    case "presion":
      html = `
        <h3>Presión</h3>
        <label>Fuerza (N): <input id="fuerzaPr" type="number"></label>
        <label>Área (m²): <input id="areaPr" type="number"></label>
        <button onclick="calcularPresion()">Calcular</button>
        <p id="resultado"></p>
      `;
      break;
    case "densidad":
      html = `
        <h3>Densidad</h3>
        <label>Masa (kg): <input id="masaD" type="number"></label>
        <label>Volumen (m³): <input id="volumenD" type="number"></label>
        <button onclick="calcularDensidad()">Calcular</button>
        <p id="resultado"></p>
      `;
      break;
    case "energiaCinetica":
      html = `
        <h3>Energía Cinética</h3>
        <label>Masa (kg): <input id="masaEc" type="number"></label>
        <label>Velocidad (m/s): <input id="velocidadEc" type="number"></label>
        <button onclick="calcularEnergiaCinetica()">Calcular</button>
        <p id="resultado"></p>
      `;
      break;
    case "energiaPotencial":
      html = `
        <h3>Energía Potencial</h3>
        <label>Masa (kg): <input id="masaEp" type="number"></label>
        <label>Altura (m): <input id="alturaEp" type="number"></label>
        <button onclick="calcularEnergiaPotencial()">Calcular</button>
        <p id="resultado"></p>
      `;
      break;
    case "leyOhm":
      html = `
        <h3>Ley de Ohm</h3>
        <label>Voltaje (V): <input id="voltaje" type="number"></label>
        <label>Resistencia (Ω): <input id="resistencia" type="number"></label>
        <button onclick="calcularOhm()">Calcular</button>
        <p id="resultado"></p>
      `;
      break;
  }

  contenedor.innerHTML = html;
}

// Funciones de cálculo
function calcularVelocidad() {
  const d = parseFloat(document.getElementById("distancia").value);
  const t = parseFloat(document.getElementById("tiempo").value);
  mostrarResultado(d / t, "m/s");
}

function calcularAceleracion() {
  const vf = parseFloat(document.getElementById("vf").value);
  const vi = parseFloat(document.getElementById("vi").value);
  const t = parseFloat(document.getElementById("tiempoA").value);
  mostrarResultado((vf - vi) / t, "m/s²");
}

function calcularFuerza() {
  const m = parseFloat(document.getElementById("masaF").value);
  const a = parseFloat(document.getElementById("aceleracionF").value);
  mostrarResultado(m * a, "N");
}

function calcularTrabajo() {
  const f = parseFloat(document.getElementById("fuerzaT").value);
  const d = parseFloat(document.getElementById("distanciaT").value);
  mostrarResultado(f * d, "J");
}

function calcularPotencia() {
  const w = parseFloat(document.getElementById("trabajoP").value);
  const t = parseFloat(document.getElementById("tiempoP").value);
  mostrarResultado(w / t, "W");
}

function calcularPresion() {
  const f = parseFloat(document.getElementById("fuerzaPr").value);
  const a = parseFloat(document.getElementById("areaPr").value);
  mostrarResultado(f / a, "Pa");
}

function calcularDensidad() {
  const m = parseFloat(document.getElementById("masaD").value);
  const v = parseFloat(document.getElementById("volumenD").value);
  mostrarResultado(m / v, "kg/m³");
}

function calcularEnergiaCinetica() {
  const m = parseFloat(document.getElementById("masaEc").value);
  const v = parseFloat(document.getElementById("velocidadEc").value);
  mostrarResultado(0.5 * m * v * v, "J");
}

function calcularEnergiaPotencial() {
  const m = parseFloat(document.getElementById("masaEp").value);
  const h = parseFloat(document.getElementById("alturaEp").value);
  const g = 9.8;
  mostrarResultado(m * g * h, "J");
}

function calcularOhm() {
  const v = parseFloat(document.getElementById("voltaje").value);
  const r = parseFloat(document.getElementById("resistencia").value);
  mostrarResultado(v / r, "A");
}

function mostrarResultado(valor, unidad) {
  const resultado = document.getElementById("resultado");
  if (isNaN(valor) || !isFinite(valor)) {
    resultado.textContent = "Por favor, ingrese valores válidos.";
  } else {
    resultado.textContent = Resultado: ${valor.toFixed(2)} ${unidad};
  }
}
