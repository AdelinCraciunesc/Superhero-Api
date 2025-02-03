import { Test, TestingModule } from '@nestjs/testing';
import { SuperheroesController } from './superheroes.controller';
import { SuperheroesService } from './superheroes.service';

describe('SuperheroesController', () => {
  let controller: SuperheroesController;
  let service: SuperheroesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SuperheroesController],
      providers: [
        {
          provide: SuperheroesService, // Provide a fake service
          useValue: {
            create: jest.fn(), // Mock function
            findAll: jest.fn().mockReturnValue([]), // Mock function returning an empty array
          },
        },
      ],
    }).compile();

    controller = module.get<SuperheroesController>(SuperheroesController);
    service = module.get<SuperheroesService>(SuperheroesService);
  });

  // jest tests
  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  // Test Get request
  it('should return an array of superheroes', async () => {
    expect(await controller.getSortedSuperheroes()).toEqual([]);
  });

  // Test Post request
  it('should create a new superhero', async () => {
    const superhero = { 
      name: 'Thor', 
      superpower: 'God', 
      humilityScore: 7 
    };
    service.createSuperHero = jest.fn().mockReturnValue(superhero);

    const result = await controller.createSuperhero(superhero);
    expect(result).toEqual(superhero);
    expect(service.createSuperHero).toHaveBeenCalledWith(superhero);
  })

  it('should reject a superhero without a name', async () => {
    const invalidHero = { superpower: 'Flight', humilityScore: 8 }; // No name

    await expect(controller.createSuperhero(invalidHero as any)).rejects.toThrow();
  });

  it('should reject a superhero with an invalid humility score', async () => {
    const invalidHero = { name: 'Moon Knight', superpower: 'Stealth', humilityScore: 35 }; // Score too high

    await expect(controller.createSuperhero(invalidHero as any)).rejects.toThrow();
  });

  it('should accept a valid superhero', async () => {
    const validHero = { name: 'Superman', superpower: 'Strength', humilityScore: 9 };

    service.createSuperHero = jest.fn().mockReturnValue(validHero); // Mock service response

    const result = await controller.createSuperhero(validHero);

    expect(result).toEqual(validHero); // Ensure response is correct
  });
});
