import mysql from 'mysql2';

// Este arquivo é responsável por abrir a conexão com o mysql.

const pool = mysql.createPool({
    connectionLimit: 10,
    host:"10.89.240.60",
    user:"aluno",
    password:"senai@604",
    database:"saic_sprint"
})

export default pool;