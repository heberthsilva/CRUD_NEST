import { VendaModule } from './Backend/vendas/venda.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClienteModule } from './Backend/cliente/cliente.module';
import { FuncionarioModule } from './Backend/funcionario/funcionario.module';
import { ProdutoModule } from './Backend/produto/produto.module';

//import {HttpClienteModule} from '@angular/common/http'

@Module({
  imports: [
    //HttpClienteModule,
    FuncionarioModule,
    ProdutoModule,
    ClienteModule,
    VendaModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
