import express from "express";
const app = express();
import db from "./models/index.js";
import contactRoutes from './routes/contact.route.js';

app.use(express.json());
app.use('/', contactRoutes);

const startserver = async () =>{
    try{ 
        await db.mongoose.connect(db.url, {
            dbName : "portfolio"        
        });
        console.log("Connection to the database successful");
        
        app.listen(db.PORT,()=>{
            console.log("http://localhost:"+db.PORT);   
        })  
    }catch(error){
        console.log(error.message);
    }
} 
startserver();

export default app;