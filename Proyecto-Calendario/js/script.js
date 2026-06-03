// Función verificada para cálculo de años bisiestos
const esBisiesto = (year) => (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

const nombresMeses = [
 "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
 "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

let listaDeHitos = [];
let mesActual = new Date().getMonth();
let anioActual = new Date().getFullYear();

// Cargar hitos desde el archivo JSON
async function cargarHitos() {
 try {
 const respuesta = await fetch('hitos.json');
 if (!respuesta.ok) throw new Error('No se pudo cargar hitos.json');
 listaDeHitos = await respuesta.json();
 console.log('✅ Hitos cargados:', listaDeHitos);
 } catch (error) {
 console.error('⚠️ Error al cargar hitos.json:', error);
 console.log('📌 Usando lista de hitos vacía');
 listaDeHitos = [];
 }
}

// Generar opciones de años (últimos 10 años y próximos 10)
function generarOpcionesAnios() {
 const selectAnio = document.querySelector('#seleccionarAnio');
 const anioActualSistema = new Date().getFullYear();
 
 for (let i = anioActualSistema - 10; i <= anioActualSistema + 10; i++) {
 const option = document.createElement('option');
 option.value = i;
 option.textContent = i;
 selectAnio.appendChild(option);
 }
 
 selectAnio.value = anioActualSistema;
}

// Generar opciones de meses
function generarOpcionesMeses() {
 const selectMes = document.querySelector('#seleccionarMes');
 
 nombresMeses.forEach((mes, index) => {
 const option = document.createElement('option');
 option.value = index;
 option.textContent = mes;
 selectMes.appendChild(option);
 });
 
 selectMes.value = new Date().getMonth();
}

function generarCalendario(mes, anio) {
 const contenedor = document.querySelector('#contenedorDias');
 const elementoMes = document.querySelector('#nombreMes');
 
 // Actualizar título del mes actual
 elementoMes.textContent = `${nombresMeses[mes]} ${anio}`;
 
 const primerDiaSemana = new Date(anio, mes, 1).getDay();
 
 // Obtener total de días del mes
 let totalDias = new Date(anio, mes + 1, 0).getDate();
 if (mes === 1) {
 totalDias = esBisiesto(anio) ? 29 : 28;
 }

 contenedor.innerHTML = '';
 
 // 1. Generación de espacios vacíos para alinear el inicio del mes
 for (let i = 0; i < primerDiaSemana; i++) {
 contenedor.innerHTML += `<div class="dia-vacio"></div>`;
 }
 
 // 2. Carga dinámica de los días del mes
 for (let dia = 1; dia <= totalDias; dia++) {
 // Verificar si es el día actual
 const esHoy = (dia === new Date().getDate() && mes === new Date().getMonth() && anio === new Date().getFullYear());
 
 // Verificar si este día coincide con algún hito
 const tieneHito = listaDeHitos.some(hito => hito.dia === dia && hito.mes === mes);
 
 // Asignar clases CSS correspondientes
 let clases = "dia-celda";
 if (esHoy) clases += " hoy";
 if (tieneHito) clases += " evento-marcado";
 
 // Obtener descripción del hito si existe
 const hito = listaDeHitos.find(h => h.dia === dia && h.mes === mes);
 const titulo = hito ? hito.descripcion : '';
 
 // Crear elemento dinámico
 contenedor.innerHTML += `<div class="${clases}" title="${titulo}">${dia}</div>`;
 }
 
 // Actualizar información de eventos
 actualizarInfoEventos(mes, anio);
}

// Mostrar información de eventos del mes
function actualizarInfoEventos(mes, anio) {
 const eventosDelMes = listaDeHitos.filter(hito => hito.mes === mes);
 const infoEventos = document.querySelector('#infoEventos');
 
 if (eventosDelMes.length === 0) {
 infoEventos.innerHTML = '';
 return;
 }
 
 let html = `<h3>📌 Eventos de ${nombresMeses[mes]} ${anio}:</h3><ul class="lista-eventos">`;
 
 eventosDelMes.forEach(evento => {
 html += `<li class="evento-item">${evento.dia} de ${nombresMeses[evento.mes]}: ${evento.descripcion}</li>`;
 });
 
 html += `</ul>`;
 infoEventos.innerHTML = html;
}

// Event Listeners
document.querySelector('#seleccionarMes').addEventListener('change', (e) => {
 mesActual = parseInt(e.target.value);
 generarCalendario(mesActual, anioActual);
});

document.querySelector('#seleccionarAnio').addEventListener('change', (e) => {
 anioActual = parseInt(e.target.value);
 generarCalendario(mesActual, anioActual);
});

document.querySelector('#mesAnterior').addEventListener('click', () => {
 if (mesActual === 0) {
 mesActual = 11;
 anioActual--;
 } else {
 mesActual--;
 }
 document.querySelector('#seleccionarMes').value = mesActual;
 document.querySelector('#seleccionarAnio').value = anioActual;
 generarCalendario(mesActual, anioActual);
});

document.querySelector('#mesSiguiente').addEventListener('click', () => {
 if (mesActual === 11) {
 mesActual = 0;
 anioActual++;
 } else {
 mesActual++;
 }
 document.querySelector('#seleccionarMes').value = mesActual;
 document.querySelector('#seleccionarAnio').value = anioActual;
 generarCalendario(mesActual, anioActual);
});

document.querySelector('#hoy').addEventListener('click', () => {
 const ahora = new Date();
 mesActual = ahora.getMonth();
 anioActual = ahora.getFullYear();
 document.querySelector('#seleccionarMes').value = mesActual;
 document.querySelector('#seleccionarAnio').value = anioActual;
 generarCalendario(mesActual, anioActual);
});

// Inicialización
async function inicializar() {
 await cargarHitos();
 generarOpcionesMeses();
 generarOpcionesAnios();
 generarCalendario(mesActual, anioActual);
}

// Ejecutar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', inicializar);
