import mongoose from "mongoose";

const Connection= async(username,password)=>{

    const URL=`mongodb://${username}:${password}@ac-4mytbo7-shard-00-00.bu7hxk1.mongodb.net:27017,ac-4mytbo7-shard-00-01.bu7hxk1.mongodb.net:27017,ac-4mytbo7-shard-00-02.bu7hxk1.mongodb.net:27017/mearn12?ssl=true&replicaSet=atlas-8zkiao-shard-0&authSource=admin&retryWrites=true&w=majority`;

    try{
        await mongoose.connect(URL,{useUnifiedTopology:true,useNewUrlParser:true});
        console.log("Database connected successfully")
    }catch(error){
        console.log('Error while connecting',error);
    }
}

export default Connection;