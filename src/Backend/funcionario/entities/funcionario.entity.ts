import { Document } from 'mongoose';
export interface Funcionario extends Document {
    readonly nome: string;
    readonly cpf: string;
    readonly dataNascimento: string;
    readonly endereco: string;
}
