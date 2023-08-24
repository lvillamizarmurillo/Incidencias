import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config("../");

export default async function conexion(){
    try {
        const uri = `mongodb+srv://${process.env.MY_NAME_DB}:${process.env.MY_PASSWORD_DB}@cluster0.1wthqi6.mongodb.net/${process.env.MY_DB}`;
        const opc = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        };
        const client = await new MongoClient(uri,opc).connect();
        return client.db();
    } catch (error) {
        return {status: 500,message: error}
    }
}