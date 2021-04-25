import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FuncionarioModule } from './funcionario/funcionario.module';
import { ProdutoModule } from './produto/produto.module';

@Module({
  imports: [FuncionarioModule, ProdutoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
