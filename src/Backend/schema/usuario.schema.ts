import * as mongoose from 'mongoose';

export const Usrschema = new mongoose.Schema({
    nome: String,  
    email: String,
    password: String,
});
