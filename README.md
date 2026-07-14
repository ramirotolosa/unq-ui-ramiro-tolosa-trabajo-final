# Palabras Encadenadas

Juego de palabras encadenadas desarrollado en React para el Trabajo Final Integrador de la materia Construcción de Interfaces de Usuario de la UNQ.

## Requisitos previos
- [Node.js](https://nodejs.org/es) (v18 o superior recomendado)

## Instalación del proyecto

1. Clonar el repositorio:
```bash
   git clone <url-del-repositorio>
   cd unq-ui-ramiro-tolosa-trabajo-final
```

2. Instalar las dependencias:
```bash
   npm install
```

## Cómo ejecutar el proyecto localmente

Generar la build de producción:

```bash
    npm run build
```

Y luego levantar un servidor local para previsualizarla:

```bash
    npm run preview
```

La aplicación va a estar disponible en la URL que indique la terminal (por defecto `http://localhost:4173`).

## Requisitos implementados
Se implementaron los requisitos minimos para que la aplicacion permita:
- Jugar una partida
- Ingresar palabras.
- Ver el puntaje acumulado.
- Visualizar la cadena de palabras válidas ingresadas.
- Ver el tiempo restante del turno.
- Validar las palabras utilizando la API provista.
- Informar cuando una palabra:
    - No existe.
    - Ya fue utilizada.
    - No respeta la cadena de palabras.
- Mostrar claramente cuándo la partida ha finalizado.
- Mostrar la cantidad de palabras válidas encadenadas durante la partida.
- Mostrar el puntaje final.

Además, se implementaron los siguientes requisitos extra:
- Interfaz Responsive
- Posibilidad de jugar más de una partida
- Un leaderboard local con los mejores 10 puntajes obtenidos.




