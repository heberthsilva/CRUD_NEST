import * as mongoose from 'mongoose';

export const Funcschema = new mongoose.Schema({
    nome: String,
    cpf: String,
    dataNascimento: String,
    endereco: String,
});
