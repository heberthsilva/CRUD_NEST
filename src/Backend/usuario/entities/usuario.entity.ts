import { Document } from 'mongoose';
export interface Usuario extends Document {
    readonly nome: string;
    readonly login: string;
    readonly senha: string;
}

    
    
