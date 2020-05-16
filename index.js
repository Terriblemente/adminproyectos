const express = require('express');
const conectarDB = require('./config/db');   
const cors =require('cors'); // para permitir la comunicacion entre el CLIENTE y el SERVIDOR

// crear servidor
const app = express();

// conectar base de datos
conectarDB();

// HABILITAR CORS
app.use(cors());

//HABILITAR EXPRESS.JSON
app.use(express.json({ extended : true }));
 


// PUERTO DE LA APP
const port = process.env.port || 4000 // CUALQUIER PUERTO MENOS EL 3000, RESERVADO PARA CLIENTE // 

// DEFINIR PAGINA PRINCIPAL  
/* 
 para probar qu la aplicacion este corriendo
app.get('/' , (req , res) => {
     res.send('Holanda')
 }) */ 

// IMPORTAR RUTAS
app.use('/api/usuarios',require('./routes/usuarios'));
app.use('/api/auth',require('./routes/auth'));
app.use('/api/proyectos',require('./routes/proyectos'));
app.use('/api/tareas',require('./routes/tareas'));


// ARRANCAR APP 
app.listen( port , '0.0.0.0' ,() => {
    console.log(`El servidor esta corriendo en el puerto: ${PORT}`);
});