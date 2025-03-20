# 🚀 Prueba de Despliegue de Angular en GitHub Pages

Este proyecto es una prueba de cómo desplegar una aplicación **Angular** en **GitHub Pages** de manera eficiente.

---

## 🌐 Ver la Aplicación en Producción

📌 Puedes ver la aplicación funcionando en **GitHub Pages** 👉 [aquí](https://aranagarapena.github.io/prueba-angular-despliegue/#/)  

---

## 📌 ¿Cómo Ejecutar el Proyecto en Local?

Para probar la aplicación en tu entorno local, sigue estos pasos:

### 1️⃣ Clonar el repositorio

```sh
git clone https://github.com/aranagarapena/prueba-angular-despliegue.git
cd prueba-angular-despliegue
```

### 2️⃣ Instalar dependencias

```sh
npm install
```

### 3️⃣ Ejecutar la aplicación en modo desarrollo

```sh
ng serve
```

📌 Esto iniciará la aplicación en `http://localhost:4200/`.

---

## 🚀 ¿Cómo Compilar y Desplegar en GitHub Pages?

Para compilar la aplicación y actualizar la versión en **producción**, sigue estos pasos:

### 1️⃣ Asegurar que `angular.json` tenga el `baseHref` correcto

Antes de compilar, verifica que en `angular.json` la configuración de producción tenga lo siguiente:

```json
"configurations": {
  "production": {
    "baseHref": "/prueba-angular-despliegue/" -- Aquí se pone el nombre de tu repositorio en mi caso es el que vez
  }
}
```

Esto es **crucial** para que las rutas funcionen correctamente en GitHub Pages.

### 2️⃣ Generar la Build para Producción

Colócate en el directorio raíz del proyecto y ejecuta:

```sh
ng build --configuration production --output-path ./docs
```

📌 **Esto generará los archivos de la aplicación en un directorio `docs/` ubicado en la raíz del proyecto**. Sin embargo, Angular puede generar una subcarpeta `browser/`, lo que debemos corregir.

### 3️⃣ Mover los archivos de `docs/browser/` a `docs/` y eliminar `browser/`

Si Angular genera una subcarpeta `browser/` dentro de `docs/`, mueve los archivos y elimina `browser/`con:

```sh
Move-Item -Path ./docs/browser/* -Destination ./docs/
Remove-Item -Recurse -Force ./docs/browser
```

📌 **Después de este paso, `docs/` debe contener directamente `index.html`, `main.js`, `styles.css`, etc.**

### 4️⃣ Subir la Build a GitHub

```sh
git add .
git commit -m "Despliegue en GitHub Pages"
git push origin main
```

### 5️⃣ Configurar GitHub Pages (si es la primera vez)

1. Ve a **Settings** → **Pages** en tu repositorio en GitHub.
2. En la sección **Build and deployment**, selecciona:
   - **Branch:** `main`
   - **Folder:** `/docs`
3. Guarda los cambios y espera unos minutos.

### 6️⃣ Verificar la Aplicación en Producción

Después de unos minutos, visita el enlace que te haya generado GitHub Pages:

En mi caso es 👉 [este](https://aranagarapena.github.io/prueba-angular-despliegue/#/)

---

## 🎯 Estructura del Proyecto

```
📂 prueba-angular-despliegue
 ├── 📂 documentación       # Carpeta para documentación interna
 ├── 📂 desarrollo         # Carpeta con el código fuente de Angular
 │   ├── 📂 mi-app-angular # Proyecto Angular
 ├── 📂 docs               # Carpeta con la build de producción para GitHub Pages
```

---

## 🚀 Tecnologías Usadas

- 🅰️ **Angular**
- 🎨 **CSS personalizado inspirado en GitHub**
- 🌍 **Despliegue en GitHub Pages**
- 🚀 **Arquitectura Standalone Components**

---

## 💡 Notas Finales


---

📌 **¡Disfruta tu proyecto y sigue aprendiendo Angular!** 🚀✨
