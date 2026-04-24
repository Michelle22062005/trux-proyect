# Trux Proyect - Next.js App

Este es un proyecto de Next.js configurado con una arquitectura limpia, autenticación robusta y gestión de base de datos con Prisma 7.

## 🚀 Configuración Paso a Paso

### 1. Configuración de Prisma (v7+)
En esta versión, Prisma utiliza un archivo de configuración externo para mayor flexibilidad.

- **Archivo de Configuración**: `prisma.config.ts`. Aquí es donde se definen las URLs de conexión (`DATABASE_URL` y `DIRECT_URL`) obtenidas del `.env`.
- **Esquema de Datos**: `prisma/schema.prisma`. Nota que en Prisma 7, el bloque `datasource` no lleva las URLs directamente si usas el archivo de configuración.
- **Generación del Cliente**: El cliente se genera en la carpeta personalizada `./generated/prisma`.
- **Comandos Útiles**:
  ```bash
  # Generar el cliente
  npx prisma generate
  
  # Crear y aplicar migraciones
  npx prisma migrate dev --name init
  
  # Empujar cambios directamente (sin historial de migraciones)
  npx prisma db push
  ```

### 2. Autenticación con JWT (JSON Web Tokens)
La seguridad de las sesiones se maneja mediante tokens.
- **Implementación**: Se generan tokens firmados en el proceso de Login.
- **Uso**: El token contiene el ID y email del usuario, permitiendo identificarlo en peticiones protegidas.
- **Configuración**: Requiere una variable `JWT_SECRET` en el archivo `.env`.

### 3. Encriptación con Bcrypt
Para proteger las contraseñas, nunca las guardamos en texto plano.
- **Librería**: `bcryptjs`.
- **Proceso**:
    - **Registro**: La contraseña se "hashea" con un factor de costo de 10 antes de persistirla.
    - **Validación**: Durante el login, se utiliza `compareHashed` para verificar que la contraseña ingresada coincida con el hash almacenado.
- **Ubicación**: Lógica centralizada en `src/lib/hash.ts`.

### 4. Estructura del Proyecto
El proyecto está organizado siguiendo principios de arquitectura limpia:

- **`src/core/domain/entities`**: Contiene las interfaces de TypeScript y los esquemas de validación **Zod** (ej. `User.ts`).
- **`src/core/use-cases`**: Contiene la lógica de negocio independiente del framework (ej. `registerUser.ts`, `loginUser.ts`).
- **`src/app/api`**: Define los endpoints del backend (API Routes).
- **`src/app/(auth)`**: Contiene las páginas de Login y Registro (Rutas de grupo).
- **`src/componets`**: Componentes de React para la interfaz de usuario.
- **`src/lib`**: Configuraciones de terceros (cliente de Prisma en `db.ts`, hashing en `hash.ts`).

---

## 🛠️ Requisitos previos
Asegúrate de tener un archivo `.env` con las siguientes variables:
```env
DATABASE_URL="tu_url_de_pooler_supabase"
DIRECT_URL="tu_url_directa_supabase"
JWT_SECRET="tu_secreto_super_seguro"
```
# JWT Secrets
JWT_ACCESS_SECRET="clave_secreta_para_el_access_token_super_segura_123"
JWT_REFRESH_SECRET="clave_secreta_para_el_refresh_token_super_segura_456"

DATABASE_URL="postgresql://postgres.dnkjmsaemgkgxlnaszyt:rxjZVCFDGTMN5RyN@aws-1-us-east-1.pooler.supabase.com:6543/postgres"

DIRECT_URL="postgresql://postgres.dnkjmsaemgkgxlnaszyt:rxjZVCFDGTMN5RyN@aws-1-us-east-1.pooler.supabase.com:5432/postgres"
