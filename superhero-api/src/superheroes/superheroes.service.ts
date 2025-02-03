import { Injectable, BadRequestException } from '@nestjs/common';
import { CreateSuperheroDto } from './dto/create-superhero.dto';

@Injectable()
export class SuperheroesService {
  private superheroes: CreateSuperheroDto[] = [
    {
      name: 'Superman',
      superpower: 'Strength',
      humilityScore: 7,
    },
    {
      name: 'Batman',
      superpower: 'Money',
      humilityScore: 5,
    },
    {
      name: 'Flash',
      superpower: 'Fast speed',
      humilityScore: 8,
    },
  ]; // In-memory storage

  createSuperHero(superhero: CreateSuperheroDto) {
    // Check if the superhero already exists
    const exists = this.superheroes.some(s => s.name.toLowerCase() === superhero.name.toLowerCase());
    if (exists) {
      throw new BadRequestException(`Superhero "${superhero.name}" already exists!`);
    }

    this.superheroes.push(superhero);
    return superhero;
  }

  // Sort superheroes by humility score
  getSortedSuperheroes() {
    return this.superheroes.sort((a, b) => b.humilityScore - a.humilityScore);
  }
}
