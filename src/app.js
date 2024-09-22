const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

const app = express();

// Configuración de Handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Archivos estáticos
app.use(express.static(path.join(__dirname, '../PUBLIC')));

// Rutas
const indexRouter = require('./routes/index');
const cartsRouter = require('./routes/carts');
const productsRouter = require('./routes/products');

app.use('/', indexRouter);
app.use('/', cartsRouter);
app.use('/', productsRouter);

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});