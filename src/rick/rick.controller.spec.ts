import { Test, TestingModule } from '@nestjs/testing';
import { RickController } from './rick.controller';

describe('RickController', () => {
  let controller: RickController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RickController],
    }).compile();

    controller = module.get<RickController>(RickController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
