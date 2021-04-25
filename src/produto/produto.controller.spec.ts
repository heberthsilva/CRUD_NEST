import { Test, TestingModule } from '@nestjs/testing';
import { ProdutoController } from './produto.controller';
import { produtoService } from './produto.service';

describe('ProdutoController', () => {
  let controller: ProdutoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProdutoController],
      providers: [produtoService],
    }).compile();

    controller = module.get<ProdutoController>(ProdutoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
