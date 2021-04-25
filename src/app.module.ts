import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClienteModule } from './Backend/cliente/cliente.module';
import { FuncionarioModule } from './Backend/funcionario/funcionario.module';
import { ProdutoModule } from './Backend/produto/produto.module';

@Module({
  imports: [FuncionarioModule, ProdutoModule, ClienteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
