import { Test, TestingModule } from '@nestjs/testing';
import {vendaService} from "./venda.service";

describe('VendaService', () => {
  let service: vendaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [vendaService],
    }).compile();

    service = module.get<vendaService>(vendaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
