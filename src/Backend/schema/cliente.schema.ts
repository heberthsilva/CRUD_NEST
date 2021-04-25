import * as mongoose from 'mongoose';

export const Clischema = new mongoose.Schema({
    nome: String,
    cpf: String,
    dataDeNascimento: String,
    endereco: String,
});
