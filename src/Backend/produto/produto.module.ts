import {Module} from '@nestjs/common';

import {ProdutoController} from './produto.controller';
import {produtoService} from "./produto.service";

import {Connection} from "mongoose";
import {produtoSchema} from "../schema/produto.schema";
import {DatabaseModule} from "../../database.module";


export const produtoProviders = [
  {
    provide: 'PRODUTO_MODEL',
    useFactory: (connection: Connection) =>
        connection.model('Produto', produtoSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];

@Module({
  imports: [DatabaseModule],
  controllers: [ProdutoController],
  providers: [produtoService,...produtoProviders]
})
export class ProdutoModule {
  nome: string;
  preco: number;
}
