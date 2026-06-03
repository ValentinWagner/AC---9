## 📌 Descripción del Proyecto

El **Calendario Dinámico Inteligente** es un componente de interfaz de usuario (UI) moderno y responsive que permite visualizar automáticamente los días del mes, detectar el día actual, identificar años bisiestos y marcar eventos académicos especiales.

### ¿Qué problema real resuelve?

En las instituciones educativas, existe la necesidad de disponer de herramientas visuales que:

- **Faciliten la organización académica**: Permite visualizar rápidamente fechas de evaluaciones, recuperatorios y entrega de trabajos.
- **Mejoren la experiencia del usuario**: Una interfaz intuitiva y responsiva accesible desde cualquier dispositivo.
- **Automaticen cálculos complejos**: Gestiona automáticamente la lógica de años bisiestos y alineación de calendarios.
- **Integren componentes dinámicos**: Puede acoplarse fácilmente a proyectos integradores más complejos (sistemas de agenda, automatización, kioscos, etc.).

Este sistema demuestra la transición desde las tablas estáticas HTML hacia componentes dinámicos gestionados por CSS Grid y JavaScript ES6+.

---

## 🚀 Instalación y Ejecución

### Requisitos Previos
- **Navegador moderno** (Chrome, Firefox, Edge, Safari)
- **Editor de código** (Visual Studio Code recomendado)
- **Git** (para clonar el repositorio)

### Pasos de Instalación

#### 1️⃣ Clonar el Repositorio
```bash
git clone https://github.com/tu-usuario/Proyecto-Calendario.git
cd Proyecto-Calendario
```

#### 2️⃣ Abrir en Visual Studio Code
```bash
code .
```

#### 3️⃣ Ejecutar el Proyecto

**Opción A: Usar Live Server (Recomendado)**
1. Instalar extensión "Live Server" en VS Code
2. Hacer clic derecho en `index.html`
3. Seleccionar "Open with Live Server"
4. El navegador abrirá automáticamente en `http://127.0.0.1:5500/`

**Opción B: Abrir directamente**
1. Hacer doble clic en `index.html`
2. O arrastrar el archivo al navegador

### Dependencias
Este proyecto **no requiere dependencias externas**. Utiliza:
- **HTML5** puro
- **CSS3** (Grid Layout)
- **JavaScript ES6+** vanilla (sin frameworks)

---

## ✨ Funcionalidades Principales

### 1️⃣ Generación Dinámica de Días
- Renderiza automáticamente todos los días del mes actual
- Calcula correctamente el primer día de la semana para alineación

### 2️⃣ Detección Automática de Años Bisiestos
Implementa el estándar de la industria:
- Un año es bisiesto si es divisible por 4
- EXCEPTO si es divisible por 100
- A MENOS que también sea divisible por 400

### 3️⃣ Marcación del Día Actual
- Destaca automáticamente el día actual en azul
- Valida fecha, mes y año
- Visible en cualquier mes/año que se seleccione

### 4️⃣ Eventos e Hitos Académicos
- **Cargados dinámicamente desde `hitos.json`**
- Marca visualmente fechas importantes en rojo
- Panel de información mostrando todos los eventos del mes

### 5️⃣ Navegación Entre Meses y Años
- **Selectores desplegables** para elegir mes y año directamente
- **Botones de navegación**: Anterior y Siguiente mes
- **Botón "Hoy"**: vuelve a la fecha actual del sistema
- Rango de años: ±10 años desde la fecha actual
- Actualización en tiempo real del calendario

### 6️⃣ Interfaz Responsiva
- Adaptable a dispositivos móviles, tablets y desktop
- Celdas perfectamente cuadradas (aspect-ratio 1:1)
- CSS Grid para máxima flexibilidad
- Controles apilables en pantallas pequeñas

### 7️⃣ Diseño Moderno Mejorado
- Gradiente de fondo (púrpura)
- Colores profesionales y accesibles
- Transiciones suaves en interacciones
- Shadow y border-radius para profundidad visual
- Efecto hover en celdas
- Información visual clara de eventos

---

## 🛠 Tecnologías Utilizadas

### Frontend
| Tecnología | Propósito |
|-----------|----------|
| **HTML5** | Estructura semántica |
| **CSS3** | Diseño responsivo con Grid |
| **JavaScript ES6+** | Lógica dinámica |
| **JSON** | Almacenamiento de hitos |

### Características Técnicas
- ✅ CSS Grid (7 columnas, gap automático)
- ✅ Aspect Ratio para celdas cuadradas
- ✅ Métodos nativos de Date API
- ✅ Array methods (map, filter, some)
- ✅ Template literals para rendering dinámico
- ✅ Validación de fechas con precisión

---

## 📂 Estructura del Proyecto

```
Proyecto-Calendario/
│
├── 📄 index.html          ← Estructura HTML con controles
├── 📁 css/
│  └── 🎨 styles.css       ← Estilos CSS Grid responsivo
├── 📁 js/
│  └── ⚙️  script.js        ← Lógica JavaScript dinámica
├── 📋 hitos.json          ← Base de datos de eventos (JSON)
├── 📖 README.md           ← Este archivo
├── 📜 LICENSE             ← Licencia MIT
└── 🔒 .gitignore          ← Exclusiones Git
```

### Descripción de Archivos

#### `index.html`
- Estructura semántica del calendario
- Controles de navegación (selectores de mes/año y botones)
- Elementos dinámicos inyectados por JavaScript
- Referencias a archivos en carpetas `css/` y `js/`

#### `css/styles.css`
- Grid de 7 columnas (DOM a SAB)
- Clases para día actual (`.hoy`) y eventos (`.evento-marcado`)
- Responsive design adaptable a cualquier dispositivo
- Gradiente moderno en fondo
- Controles estilizados (selectores y botones)
- Sección de información de eventos

#### `js/script.js`
- Función `esBisiesto()` para validación anual
- Carga **asincrónica** de `hitos.json` mediante `fetch()`
- Función `generarCalendario()` que renderiza dinámicamente
- Navegación: botones "Anterior" y "Siguiente" mes
- Selectores de mes y año
- Botón "Hoy" para volver a la fecha actual
- Información en tiempo real de eventos del mes
- Event listeners para interactividad
- Inicialización automática con fecha actual del sistema

#### `hitos.json`
- **Ahora se CARGA dinámicamente** desde el archivo JSON
- Formato: Array de objetos con `{ dia, mes, descripcion }`
- Mes indexado desde 0 (Enero = 0, Diciembre = 11)
- Permite mantener eventos separados del código
- Fácil de actualizar sin tocar JavaScript

---

**Valentin WAGNER**  
EEST N°1 "Eduardo Ader" - Vicente López  
7° Año 2° División - Grupo B  
Profesor: Mansilla Muñoz York Elías

---

## 📄 Licencia

Este proyecto está bajo la licencia **MIT** (ver archivo `LICENSE`).

---

