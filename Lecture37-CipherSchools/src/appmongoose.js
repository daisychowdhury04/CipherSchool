const mongoose=require("mongoose")
const connect=mongoose.connect;

const MONGO_URL="my_Key"

const DB_NAME="sample_mflix"

async function connectDb(){
  try{
    await connect(`${MONGO_URL}/${DB_NAME}`)
    console.log("mongodb connected")
  }
  catch(err){
    console.log(err)
  }
}

connectDb();