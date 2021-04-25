import { Document } from 'mongoose';
export interface Cliente extends Document {
    readonly nome: string;
    readonly cpf: string;
    readonly dataNascimento: string;
    readonly endereco: string;
}
