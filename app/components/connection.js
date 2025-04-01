
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',       
    user: 'root',    
    password: '',  
    database: 'its_certiport'  
});

connection.connect((err) => {
    if (err) {
        console.error('Error conectando a la BD :(:', err);
    } else {
        console.log('Conectado a la BD MySQL');
    }
});

module.exports = connection;
