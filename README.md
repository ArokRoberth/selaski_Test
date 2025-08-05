# Prueba de Atomatización con Cypress - Selaski

Este proyecto muestra cómo automatizar el proceso de autenticación y busqueda de un numero de embarque usando Cypress con Cucumber y el patrón Screenplay de la manera más simple y usando las caracteristicas y herramientas provistas por Cypress.

Stack tecnologico utilizado:

- ✅ [Cypress](https://www.cypress.io/)
- ✅ [Cucumber](https://github.com/badeball/cypress-cucumber-preprocessor)
- ✅ [Screenplay Pattern](https://serenity-js.org/handbook/design/screenplay-pattern/)
- ✅ [Mochawesome Reports](https://github.com/adamgruber/mochawesome)

---
## 📦 Instalación

```bash
git clone https://github.com/ArokRoberth/selaski_Test.git
cd selaski_Test
npm install
```

---

## 🚀 Ejecución de pruebas

### Ejecutar en modo consola (headless):

```bash
npx cypress run
```

> Esto generará los reportes JSON y HTML en `cypress/reports`.

### Ejecutar con UI:

```bash
npx cypress open
```

---

## 🧪 Estructura del proyecto

```
cypress/
├── e2e/                   # Archivos .feature de Cucumber
│   └── autenticacion/
├── fixtures/              # Datos de prueba en formato JSON
│   └── testData.json
├── support/
│   ├── e2e.js             # Soporte global de Cypress
│   └── screenplay/        # Implementación del patrón Screenplay
│       ├── actor.js
│       ├── tasks/
│       │   ├── iniciarSesion.js
│       │   └── filtrarEmbarque.js
│       └── questions/
│           └── detallesDelEmbarque.js
```
## Arquitectura 

### E2E
En esta capa se escriben los archivos .feature, estos describen las características y escenarios a probar haciendo uso del lenguaje Gherkin, además se pueden entender como las historias de usuario a desarrollar.

### Fixtures
Encontramos los datos estaticos usados en la automatización.

### Support
Permite agregar nuestros archivos de soporte, en este caso aca se incluiran los directorios necesarios para dar soporte al patrón screenplay.
*   questions -> Esta capa gestiona los Asserts o verificaciones de las pruebas.
*   taks -> Esta clase contiene las clases que son el corazón del patrón de screenplay=Las tareas.
*   stepDefinitions -> Gestiona los fragmentos de código definidos en el Given, Then, When de los escenarios de los archivos .feature.

---

## 📄 Datos de prueba

Los datos como el PIN y número de embarque están en:

```json
// cypress/fixtures/testData.json
{
  "pin": "5569",
  "embarque": "Prueba 1"
}
```

Puedes modificar este archivo para cambiar los valores dinámicamente sin tocar los steps.

---

## ✅ Requisitos

- Node.js v16 o superior
- npm
- Git

---

## 🧑‍💻 Autor

**Robert Aroca**  

---
## 📌 Notas

- Se deja evidencia de la ejecución exitosa del test dentro de la carpeta videos

- En caso de errores de dependencias, ejecutar con `--legacy-peer-deps`:

```bash
npm install --legacy-peer-deps
```

---
