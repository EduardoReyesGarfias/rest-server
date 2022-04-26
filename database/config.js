const mongoose = require("mongoose");


const dbConnection = async() =>{

    try {

        await mongoose.connect( process.env.MONGO_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log("Base de datos online");
        
    } catch (error) {

        console.log('Error en la BD', error);
        throw new Error('Error al inicializar la BD');
    
    }

}

module.exports = dbConnection;
