import { AuthModule } from './Backend/auth/auth.module';
import { VendaModule } from './Backend/vendas/venda.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClienteModule } from './Backend/cliente/cliente.module';
import { FuncionarioModule } from './Backend/funcionario/funcionario.module';
import { ProdutoModule } from './Backend/produto/produto.module';
import { UsuarioModule } from './Backend/usuario/usuario.module';

//import {HttpClienteModule} from '@angular/common/http'

@Module({
  imports: [
    AuthModule,
    //HttpClienteModule,
    FuncionarioModule,
    ProdutoModule,
    ClienteModule,
    UsuarioModule,    
    VendaModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
