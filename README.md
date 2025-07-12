# 🛒 Backend Tiendita Online

API REST completa para el proyecto de tienda online, desarrollada con Node.js, Express y Sequelize. Incluye todas las entidades necesarias para un sistema de e-commerce completo con gestión de usuarios, productos, órdenes, **carrito de compras persistente** y pagos.

## 🚀 Tecnologías

- **Node.js** - Runtime de JavaScript
- **Express.js** - Framework web
- **Sequelize** - ORM para base de datos
- **PostgreSQL** - Base de datos
- **CORS** - Habilitado para frontend

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Inicializar BD completa con todas las entidades
npm run dev -- --init --complete

# Inicializar BD básica con datos de prueba
npm run dev -- --init --seed

# Solo recrear BD (sin datos)
npm run dev -- --init
```

## 🗄️ Modelos de Datos

### Usuario (User)
```javascript
{
    id: Number,
    username: String,
    nombres: String,
    apellidos: String,
    nroDocumento: String (DNI),
    email: String,
    password: String,
    role: String ('cliente' | 'admin'),
    estado: String ('activo' | 'inactivo'),
    fechaRegistro: Date
}
```

### Categoría de Producto (ProductCategory)
```javascript
{
    id: Number,
    nombre: String,
    descripcion: String,
    imagen: String (URL)
}
```

### Producto (Product)
```javascript
{
    id: String,
    nombre: String,
    codigo: String,
    categoria: String,
    precio: String,
    unidad: String,
    imagen: String (URL),
    descripcion: String,
    presentacion: String,
    marca: String,
    origen: String,
    stock: Number,
    priceUSD: Decimal,
    pricePEN: Decimal,
    category_id: Number
}
```

### Orden (Order)
```javascript
{
    id: String, // Formato: #1234
    usuarioId: String,
    usuario: String, // Nombre completo
    fecha: Date,
    total: String, // Formato: S/100.00
    estado: String ('Pendiente' | 'Por entregar' | 'Entregado' | 'Cancelado')
}
```

### Item de Orden (OrderItem)
```javascript
{
    id: Number,
    order_id: String,
    product_id: String,
    nombre: String,
    categoria: String,
    quantity: Number,
    precio: Decimal
}
```

### Detalle de Pago (PaymentDetail)
```javascript
{
    id: Number,
    order_id: String,
    direccion: String,
    nombreTarjetahabiente: String,
    apellidoTarjetahabiente: String,
    numeroTarjeta: String,
    cvc: String,
    fechaExpiracion: String,
    tipoTarjeta: String,
    card_type_id: Number,
    usuarioId: Number,
    total: Decimal,
    status_id: Number,
    estado: String,
    fechaPago: Date
}
```

### Tipo de Tarjeta (CardType)
```javascript
{
    id: Number,
    nombre: String,
    descripcion: String,
    patron: String // Regex pattern
}
```

### Estado de Orden (OrderStatus)
```javascript
{
    id: Number,
    nombre: String,
    descripcion: String,
    orden: Number // Para ordenamiento
}
```

### Venta de Producto (ProductSale)
```javascript
{
    id: Number,
    product_id: Number,
    order_id: String,
    fecha_venta: Date,
    cantidad: Number,
    precio_unitario: Decimal,
    precio_total: Decimal,
    descuento: Decimal,
    usuario_id: Number
}
```

### Carrito de Compras (Cart)
```javascript
{
    id: Number,
    usuarioId: Number,
    estado: String ('activo' | 'abandonado' | 'convertido'),
    fechaCreacion: Date,
    fechaActualizacion: Date
}
```

### Item del Carrito (CartItem)
```javascript
{
    id: Number,
    cartId: Number,
    productId: Number,
    quantity: Number,
    precioUnitario: Decimal,
    fechaAgregado: Date
}
```

## 🛣️ Rutas de la API

### 👤 Usuarios (`/api/users`)

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/api/users` | Listar todos los usuarios |
| GET | `/api/users/:id` | Obtener usuario por ID |
| POST | `/api/users/register` | Registrar nuevo usuario |
| POST | `/api/users/login` | Iniciar sesión |
| PUT | `/api/users/:id` | Actualizar usuario |
| DELETE | `/api/users/:id` | Eliminar usuario |

#### Ejemplo Login:
```javascript
POST /api/users/login
{
    "email": "juan.perez@gmail.com",
    "password": "123456"
}
```

#### Ejemplo Registro:
```javascript
POST /api/users/register
{
    "nombres": "Juan",
    "apellidos": "Pérez",
    "nroDocumento": "12345678",
    "email": "juan.perez@gmail.com",
    "password": "123456",
    "role": "cliente"
}
```

### 🏷️ Categorías (`/api/categories`)

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/api/categories` | Listar todas las categorías |
| GET | `/api/categories/:id` | Obtener categoría por ID |
| POST | `/api/categories` | Crear nueva categoría |
| PUT | `/api/categories/:id` | Actualizar categoría |
| DELETE | `/api/categories/:id` | Eliminar categoría |

### 📦 Productos (`/api/products`)

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/api/products` | Listar todos los productos |
| GET | `/api/products/:id` | Obtener producto por ID |
| GET | `/api/products/category/:category` | Productos por categoría |
| POST | `/api/products` | Crear nuevo producto |
| PUT | `/api/products/:id` | Actualizar producto |
| DELETE | `/api/products/:id` | Eliminar producto |

#### Ejemplo Crear Producto:
```javascript
POST /api/products
{
    "nombre": "Manzanas Rojas",
    "codigo": "FRU001",
    "categoria": "Frutas y verduras",
    "precio": "8.90",
    "unidad": "x kg",
    "imagen": "/images/products/manzana.png",
    "descripcion": "Manzanas frescas y dulces",
    "stock": 100,
    "category_id": 1
}
```

### 🛒 Órdenes (`/api/orders`)

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/api/orders` | Listar todas las órdenes |
| GET | `/api/orders/:id` | Obtener orden por ID |
| GET | `/api/orders/user/:userId` | Órdenes de un usuario |
| GET | `/api/orders/:id/details` | Detalles de una orden |
| POST | `/api/orders` | Crear nueva orden |
| PUT | `/api/orders/:id` | Actualizar orden |
| DELETE | `/api/orders/:id` | Eliminar orden |

#### Ejemplo Crear Orden:
```javascript
POST /api/orders
{
    "usuarioId": "2",
    "total": "S/50.80",
    "productos": [
        {
            "id": "manzana",
            "nombre": "Manzanas Rojas",
            "categoria": "Frutas y verduras",
            "quantity": 2,
            "precio": 8.90
        }
    ]
}
```

### 🛍️ Items de Orden (`/api/order-items`)

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/api/order-items` | Listar todos los items |
| GET | `/api/order-items/:id` | Obtener item por ID |
| GET | `/api/order-items/order/:order_id` | Items de una orden |
| POST | `/api/order-items/cart/add` | Agregar al carrito |
| PUT | `/api/order-items/cart/:order_id/:product_id/quantity` | Actualizar cantidad |
| DELETE | `/api/order-items/cart/:order_id/:product_id` | Eliminar del carrito |

### 🛒 Carritos (`/api/carts`)

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/api/carts` | Listar todos los carritos |
| GET | `/api/carts/:id` | Obtener carrito por ID |
| GET | `/api/carts/user/:userId` | Obtener carrito del usuario |
| POST | `/api/carts` | Crear nuevo carrito |
| PUT | `/api/carts/:id` | Actualizar carrito |
| DELETE | `/api/carts/:id` | Eliminar carrito |
| DELETE | `/api/carts/user/:userId/clear` | Limpiar carrito del usuario |
| GET | `/api/carts/user/:userId/total` | Obtener total del carrito |

### 🛍️ Items del Carrito (`/api/cart-items`)

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/api/cart-items` | Listar todos los items |
| GET | `/api/cart-items/:id` | Obtener item por ID |
| POST | `/api/cart-items/add` | Agregar producto al carrito |
| PUT | `/api/cart-items/user/:userId/product/:productId/quantity` | Actualizar cantidad |
| DELETE | `/api/cart-items/user/:userId/product/:productId` | Eliminar del carrito |
| GET | `/api/cart-items/cart/:cartId` | Items de un carrito específico |

#### Ejemplo Agregar al Carrito:
```javascript
POST /api/cart-items/add
{
    "userId": 1,
    "productId": 5,
    "quantity": 2
}
```

#### Ejemplo Actualizar Cantidad:
```javascript
PUT /api/cart-items/user/1/product/5/quantity
{
    "quantity": 3
}
```

## 🔧 Configuración

### Variables de Entorno
```env
PORT=3001
DATABASE_URL=postgresql://usuario:password@localhost:5432/tiendita
```

### Base de Datos
El proyecto usa PostgreSQL. Asegúrate de:
1. Tener PostgreSQL instalado
2. Crear una base de datos llamada `tiendita`
3. Configurar las credenciales en `src/config/dataBase.js`

## 🎯 Características Principales

- ✅ **CRUD completo** para todas las entidades
- ✅ **Autenticación** de usuarios
- ✅ **Gestión de carrito** de compras persistente
- ✅ **Sincronización** carrito localStorage ↔ servidor
- ✅ **Carritos abandonados** para análisis
- ✅ **Stock en tiempo real** con validaciones
- ✅ **Órdenes** con items detallados
- ✅ **Categorización** de productos
- ✅ **Validaciones** de datos
- ✅ **Relaciones** entre modelos
- ✅ **Compatibilidad** con frontend React
- ✅ **Datos de prueba** incluidos
- ✅ **CORS** habilitado

## 🏗️ Estructura del Proyecto

```
src/
├── config/
│   └── dataBase.js          # Configuración de BD
├── models/
│   ├── user.js              # Modelo Usuario
│   ├── product.js           # Modelo Producto
│   ├── productCategory.js   # Modelo Categoría
│   ├── order.js             # Modelo Orden
│   ├── orderItem.js         # Modelo Item de Orden
│   ├── cart.js              # Modelo Carrito
│   └── index.js             # Relaciones entre modelos
├── controllers/
│   ├── userController.js    # Lógica de usuarios
│   ├── productController.js # Lógica de productos
│   ├── productCategoryController.js
│   ├── orderController.js   # Lógica de órdenes
│   ├── orderItemController.js
│   └── cartController.js    # Lógica de carrito
├── services/
│   ├── userService.js       # Servicios de usuarios
│   ├── productService.js    # Servicios de productos
│   ├── productCategoryService.js
│   ├── orderService.js      # Servicios de órdenes
│   ├── orderItemService.js
│   └── cartService.js       # Servicios de carrito
├── routes/
│   ├── userRoutes.js        # Rutas de usuarios
│   ├── productRoutes.js     # Rutas de productos
│   ├── productCategoryRoutes.js
│   ├── orderRoutes.js       # Rutas de órdenes
│   ├── orderItemRoutes.js
│   └── cartRoutes.js        # Rutas de carrito
└── seeders/
    └── testData.js          # Datos de prueba
```

## 🧪 Testing

Datos de prueba incluidos:
- **Admin**: admin@mitiendita.com / admin123
- **Cliente**: juan.perez@gmail.com / 123456
- **Productos**: Manzanas, Pollo, Leche
- **Orden**: #1234 con productos de ejemplo

## 🤝 Compatibilidad Frontend

Este backend es totalmente compatible con tu frontend React. Maneja tanto los nombres de campos del frontend (`correo`, `contrasena`, `nombre`) como los del backend (`email`, `password`, `name`).

## 📝 Notas Importantes

- Los IDs de órdenes usan formato `#1234` para coincidir con el frontend
- Los precios se manejan tanto como string (`S/10.50`) como decimal
- Las contraseñas se devuelven filtradas en las respuestas
- Relaciones automáticas entre modelos configuradas
- Validaciones de datos implementadas

---

**¡Tu backend está listo para funcionar con el frontend de React! 🎉**