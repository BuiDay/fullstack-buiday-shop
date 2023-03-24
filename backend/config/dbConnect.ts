import mongoose from 'mongoose'

const dbConnect = async () =>{
    try{
        process.env.MONGODB_URL && await mongoose.connect(process.env.MONGODB_URL);
        console.log('DB connect successfully')
    }
    catch(err){
        console.log(err);
        process.exit(1)
    }
}

export = dbConnect;