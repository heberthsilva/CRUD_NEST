import { Module } from '@nestjs/common';
import { FuncionarioService } from './funcionario.service';
import { FuncionarioController } from './funcionario.controller';
import { Connection } from 'mongoose';
import {DatabaseModule} from "../database.module";
import {Funcschema} from "../schema/funcionario.schema";


/* @Module({
  controllers: [FuncionarioController],
  providers: [FuncionarioService]
}) */

export const funcionarioProviders = [
  {
    provide: 'FUNC_MODEL',
    useFactory: (connection: Connection) =>
        connection.model('Funcionario', Funcschema),
    inject: ['DATABASE_CONNECTION'],
  },
];

@Module({
  imports: [DatabaseModule],
  controllers: [FuncionarioController],
  providers: [FuncionarioService, ...funcionarioProviders],
})
export class FuncionarioModule {
  nome: string;
  cpf: string;
  dataDeNascimento: string;
  endereco: string;
}
