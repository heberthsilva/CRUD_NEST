import * as mongoose from 'mongoose';

export const vendaSchema = new mongoose.Schema({
    id_pedido: String,
    id_cliente: String,
    id_vendedor: String,
    id_produto: String,
    preco: Number

});
