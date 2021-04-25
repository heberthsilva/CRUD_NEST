import { Document } from 'mongoose';
export interface Produto extends Document {
    readonly nome: string;
    readonly preco: number;

}