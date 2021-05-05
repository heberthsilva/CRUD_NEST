import * as mongoose from 'mongoose';

export const Usrschema = new mongoose.Schema({
    nome: String,  
    login: String,
    senha: String,
});
