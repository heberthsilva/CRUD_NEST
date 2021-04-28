import { Test, TestingModule } from '@nestjs/testing';
import { VendaController } from './venda.controller';
import { vendaService } from './venda.service';

describe('VendaController', () => {
  let controller: VendaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VendaController],
      providers: [vendaService],
    }).compile();

    controller = module.get<VendaController>(VendaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
