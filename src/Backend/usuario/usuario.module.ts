import { Module } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioController } from './usuario.controller';
import { Connection } from 'mongoose';
import {DatabaseModule} from "../../database.module";
import {Usrschema} from "../../Backend/schema/usuario.schema";


/* @Module({
  controllers: [UsuarioController],
  providers: [UsuarioService]
}) */

export const usuarioProviders = [
  {
    provide: 'USR_MODEL',
    useFactory: (connection: Connection) =>
        connection.model('Usuario', Usrschema),
    inject: ['DATABASE_CONNECTION'],
  },
];

@Module({
  imports: [DatabaseModule],
  controllers: [UsuarioController],
  providers: [UsuarioService, ...usuarioProviders],
})
export class UsuarioModule {
  nome: string;  
  login: string;
  senha: string;
}
