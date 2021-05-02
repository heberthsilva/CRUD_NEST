import * as mongoose from 'mongoose';

export const produtoSchema = new mongoose.Schema({
    nome: String,
    preco:Number,
    quantidade:Number
});
