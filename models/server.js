const express = require('express');
const cors = require('cors')
const usuariosRouter = require('../routes/usuarios.route');
const dbConnection = require('../database/config');

class Server{

    constructor(){

        this.app = express();
        this.port = process.env.PORT;

        // Endpoints path
        this.pathUsuarios = '/api/usuarios';

        // Conectar a DB
        this.conectarDB();
        // Middlewares
        this.middlewares();

        // Rutas
        this.routes();

    }

    async conectarDB(){

        //await dbConnection();
        await dbConnection();

    }

    middlewares = () =>{

        // Cors
        this.app.use( cors() );

        // Lectura y parseo del body
        this.app.use( express.json() );
        
        // Directorio publico
        this.app.use( express.static('public') );
    }

    routes = () =>{

        this.app.use(this.pathUsuarios, usuariosRouter);
    
    };


    listen = () =>{
        this.app.listen( this.port , () =>{
            console.log('Corriendo app en el puerto ', this.port);
        })
    };

}

module.exports = Server;