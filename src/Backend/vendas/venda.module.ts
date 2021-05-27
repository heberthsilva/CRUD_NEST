import {Module} from '@nestjs/common';

import {VendaController} from './venda.controller';
import {vendaService} from "./venda.service";

import {Connection} from "mongoose";
import {vendaSchema} from "../schema/venda.schema";
import {DatabaseModule} from "../../database.module";


export const vendaProviders = [
  {
    provide: 'VENDA_MODEL',
    useFactory: (connection: Connection) =>
        connection.model('Venda', vendaSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];

@Module({
  imports: [DatabaseModule],
  controllers: [VendaController],
  providers: [vendaService,...vendaProviders]
})
export class VendaModule {
   id_pedido:string;
   id_cliente: string;
   id_funcionario: string;
   id_produto:string;
   preco: number;
}
