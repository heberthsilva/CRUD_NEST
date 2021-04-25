import { Test, TestingModule } from '@nestjs/testing';
import {produtoService} from "./produto.service";

describe('ProdutoService', () => {
  let service: produtoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [produtoService],
    }).compile();

    service = module.get<produtoService>(produtoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
