(async () => {
    const mysql = require('mysql2/promise');

    const config = {
        host: 'localhost',
        user: 'root',
        password: '!golddi100',
        database: 'dijingyuan'
    }
    const connection = await mysql.createConnection(config);
    let query = await connection.execute(`CREATE TABLE If NOT EXISTS mysql2_test (
        id_mysql2 INT NOT NULL AUTO_INCR EMENT,
        message VARCHAR(10) NULL,
        PRIMARY KEY (id_mysql2))`)
    console.log(query);
})()
