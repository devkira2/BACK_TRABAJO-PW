import app from './app.js';
import sequelize from './src/config/dataBase.js'

async function main(){
    try{
        const init = process.argv[2];
        console.log({init})
        if (init)
            await sequelize.sync({force: true})
        else
            await sequelize.sync({force: false})
        console.log('se logró la conexión pal acarreo')
        
        app.listen(3001)

        console.log('app corriendo pal acarreo')
    }

    catch(err){
        console.error('triste pq no funca el acarreo: ', err)
    }

}

main()