// import { Prisma } from "@prisma/client/extension";

// import { PrismaClient } from "@prisma/client";
// import pkg from "@prisma/client";
// const { PrismaClient } = pkg;
// import { PrismaClient } from "../../generated/prisma/index.js";
import { PrismaClient } from "@prisma/client";
// const PrismaClient = require("@prisma/client");

 export const prisma = new PrismaClient({
log: process.env.NODE_ENV === "development"
  ? ["query", "error", "warn"]
  : ["error"]
})

export const connectDB= async () =>{
    try{
        await prisma.$connect();
        console.log("Database connected with the prisma");  
    }
    catch(error){
    console.log(`Database connection error ${error}`)
    process.exit(1);
    }
}


 export const disconnetDB = async () => {
    await prisma.$disconnect();
}


