import { Document } from 'mongoose';
export interface Usuario extends Document {
    readonly nome: string;
    readonly email: string;
    readonly password: string;
}

    
    
