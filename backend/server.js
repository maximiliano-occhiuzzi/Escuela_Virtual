const express = require("express");

const cors = require("cors");

const { Pool } = require("pg");

const app = express();

app.use(cors());

app.use(express.json());

const pool = new Pool({

    user: "postgres",

    host: "localhost",

    database: "escuela_virtual",

    password: "fatima",

    port: 5432

});

pool.connect()
.then(() => {
    console.log("Conectado a PostgreSQL");
})
.catch((err) => {
    console.log("Error PostgreSQL", err);
});

app.get("/", (req, res) => {

    res.send("Servidor funcionando");

});

app.post("/contacto", async (req, res) => {

    const { nombre, email, mensaje } = req.body;

    try {

        await pool.query(

            "INSERT INTO contactos(nombre, email, mensaje) VALUES($1,$2,$3)",

            [nombre, email, mensaje]

        );

        res.json({

            mensaje: "Guardado"

        });

    } catch (error) {

        console.log(error);

        res.status(500).json({

            error: "Error"

        });

    }

});

app.post("/login", async (req, res) => {

    const { email, password } = req.body;

    try {

        const result = await pool.query(

            "SELECT * FROM usuarios WHERE email = $1 AND password = $2",

            [email, password]

        );

        if (result.rows.length > 0) {

            res.json({
                success: true,
                usuario: result.rows[0]
            });

        } else {

            res.status(401).json({
                success: false,
                mensaje: "Credenciales incorrectas"
            });

        }

    } catch (error) {

        console.log(error);

        res.status(500).json({
            error: "Error servidor"
        });

    }

});
app.post("/tareas", async (req, res) => {

    const {

        titulo,

        descripcion,

        fechaEntrega,

        materia

    } = req.body;

    try {

        await pool.query(

            `INSERT INTO tareas
            (titulo, descripcion, fecha_entrega, materia)
            VALUES($1,$2,$3,$4)`,

            [

                titulo,

                descripcion,

                fechaEntrega,

                materia

            ]

        );

        res.json({

            mensaje: "Tarea guardada"

        });

    } catch (error) {

        console.log(error);

        res.status(500).json({

            error: "Error servidor"

        });

    }

});

app.get("/tareas", async (req, res) => {

    try {

        const result = await pool.query(

            "SELECT * FROM tareas ORDER BY id DESC"

        );

        res.json(result.rows);

    } catch (error) {

        console.log(error);

        res.status(500).json({

            error: "Error servidor"

        });

    }

});

app.listen(3001, () => {

    console.log("Servidor puerto 3001");

});