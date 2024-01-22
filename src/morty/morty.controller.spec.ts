import { Test, TestingModule } from '@nestjs/testing';
import { MortyController } from './morty.controller';

describe('MortyController', () => {
  let controller: MortyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MortyController],
    }).compile();

    controller = module.get<MortyController>(MortyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
