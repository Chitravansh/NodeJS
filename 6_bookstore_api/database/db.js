const mongoose = require('mongoose');

const connectToDB = async()=>{
    try{
        await mongoose.connect('mongodb+srv://new_admin:8787230617@cluster0.c6trml8.mongodb.net/')
        console.log('Db Connected now')

    }catch(error){
        console.error('NogoDB Connection failed',error)
        process.exit(1)
    }
}



module.exports = connectToDB;