import { Module } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { ClienteController } from './cliente.controller';
import { Connection } from 'mongoose';
import {DatabaseModule} from "../../database.module";
import {Clischema} from "../../Backend/schema/cliente.schema";


/* @Module({
  controllers: [ClienteController],
  providers: [ClienteService]
}) */

export const clienteProviders = [
  {
    provide: 'CLI_MODEL',
    useFactory: (connection: Connection) =>
        connection.model('Cliente', Clischema),
    inject: ['DATABASE_CONNECTION'],
  },
];

@Module({
  imports: [DatabaseModule],
  controllers: [ClienteController],
  providers: [ClienteService, ...clienteProviders],
})
export class ClienteModule {
  nome: string;
  cpf: string;
  dataDeNascimento: string;
  endereco: string;
}
