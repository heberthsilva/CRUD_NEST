import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClienteModule } from './cliente/cliente.module';
import { FuncionarioModule } from './funcionario/funcionario.module';
import { ProdutoModule } from './produto/produto.module';

@Module({
  imports: [FuncionarioModule, ProdutoModule, ClienteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
