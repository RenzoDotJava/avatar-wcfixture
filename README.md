## Descripción del proyecto

Este proyecto tiene como próposito principal mostrar el fixture de la fase de grupos de la Copa del Mundo Qatar 2022. Dentro de este fixture se podrán visualizar los grupos, los equipos que conforman cada grupo y el resultado de cada encuentro.

## Iniciar Proyecto

Para iniciar el proyecto:

```bash
npm install
# luego
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) en su navegador para ver el resultado.

## Tech Stack

**Stack:** React, NextJS, TailwindCSS

## Información de la APIS

#### Iniciar sesión
Para caso práctico de este proyecto se usa este API para obtener el token. Los datos del usuario (email y password) deben ser ingresados en el archivo .env.local.

```http
  POST /api/auth/login
```

#### Obtener equipos

```http
  GET /api/team
```

#### Obtener partidos

```http
  GET /api/match
```

## Posibles Mejoras

- Agregar la funcionalidad de registro e iniciar sesión
- Mejorar el layout y grid en el cual se presentan los grupos
- Mejorar el responsive
- Aprovechar todas las APIS que provee el servicio [raminmr/free-api-worldcup2022](https://github.com/raminmr/free-api-worldcup2022), para asi agregar mas detalle de cada equipo.
- Crear un layout para los resultados de los encuentro directos.
- Guardar el token de autentificación en los cookies o en el localStorage.
- Realizar tests para asegurar que la información se está mostrando correctamente.

## World Cup 2022 API

[https://github.com/raminmr/free-api-worldcup2022](https://github.com/raminmr/free-api-worldcup2022)
