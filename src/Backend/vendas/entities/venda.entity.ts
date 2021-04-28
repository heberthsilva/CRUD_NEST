import { Document } from 'mongoose';
export interface Venda extends Document {
    readonly id_pedido:string;
    readonly id_cliente: string;
    readonly id_vendedor: string;
    readonly id_produto:string;
    readonly preco: number;

}