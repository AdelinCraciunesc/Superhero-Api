import { Test, TestingModule } from '@nestjs/testing';
import { SuperheroesService } from './superheroes.service';
import { BadRequestException } from '@nestjs/common';

describe('SuperheroesService', () => {
  let service: SuperheroesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SuperheroesService],
    }).compile();

    service = module.get<SuperheroesService>(SuperheroesService);
  });

  // jest tests
  it('should add a superhero successfully', () => {
    const superhero = { name: 'Iron Man', superpower: 'Genius and money', humilityScore: 6 };
    expect(service.createSuperHero(superhero)).toEqual(superhero);
  });

  it('should throw error for duplicate superhero', () => {
    const superhero = { name: 'Iron Man', superpower: 'Genius and money', humilityScore: 6 };
    service.createSuperHero(superhero);
    expect(() => service.createSuperHero(superhero)).toThrow(BadRequestException);
  });
});
