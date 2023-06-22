const express =  require('express');
const cors = require('cors');

const { dbConnection } =  require('./database/config');


class Server 
{
    constructor()
    {
        this.app = express.Router();
        this.router = express.Router();

        this.port = process.env.PORT;

        this.paths = {
            inversions: '/api/inversions',
            inversionistas: '/api/inversionistas',
            conceptos: '/api/conceptos'
        }

        this.connectDB();
        this.middlewares();
        this.routes();
        this.router.use('/v1/inventory', this.app);
        this._express = express().use(this.router);
    }
    async connectDB(){
        await dbConnection();
    }
    middlewares(){
        this.app.use(cors());
        this.app.use(express.json())
        this.app.use(express.static('public'));
        this.app.use( '/uploads/', express.static('uploads'))

    }
    routes(){
        this.app.use(this.paths.inversions, require('./routes/inversions')   )
        this.app.use(this.paths.inversionistas, require('./routes/inversionistas')   )
        this.app.use(this.paths.conceptos, require('./routes/conceptos')   )
    }

    listen(){
        this._express.listen(2500, ()=>{
            console.log(`Servidor ejecuntando en puerto ${this.port}`)
        })
    }


}


module.exports = Server;