import * as mongoose from 'mongoose';

export const Funcschema = new mongoose.Schema({
    nome: String,
    cpf: String,
    dataDeNascimento: String,
    endereco: String,
});
