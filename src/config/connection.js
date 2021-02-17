const mysql = require('mysql');

const connection = mysql.createConnection({
    host: "sql208.epizy.com",
    user: "epiz_27956737",
    password: "UGIQJLS0H7Ga",
    database: "epiz_27956737_comercioamigavel"
});

module.exports = connection;