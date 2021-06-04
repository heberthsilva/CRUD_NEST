import { Document } from 'mongoose';
export interface Venda extends Document {
    readonly id_pedido:string;
    readonly id_cliente: string;
    readonly id_funcionario: string;
    readonly id_produto:string;
    readonly preco: number;
    readonly cardNumber: string;
    readonly cardHolder: string;
    readonly expirationMonth: string;
    readonly expirationYear: string;
    readonly ccv: number;
} 