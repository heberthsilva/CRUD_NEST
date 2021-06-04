import * as mongoose from 'mongoose';

export const vendaSchema = new mongoose.Schema({
    id_pedido: String,
    id_cliente: String,
    id_funcionario: String,
    id_produto: String,
    preco: Number,
    cardNumber: String,
    cardHolder: String,
    expirationMonth: String,
    expirationYear: String,
    ccv: Number,

});
