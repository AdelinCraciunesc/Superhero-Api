import { Controller, Get, Post, Body } from '@nestjs/common';
import { SuperheroesService } from './superheroes.service';
import { CreateSuperheroDto } from './dto/create-superhero.dto';

@Controller('superheroes')
export class SuperheroesController {
  constructor(private readonly superheroesService: SuperheroesService) {}

  @Post()
  createSuperhero(@Body() createSuperheroDto: CreateSuperheroDto) {
    return this.superheroesService.createSuperHero(createSuperheroDto);
  }

  @Get()
  getSortedSuperheroes() {
    return this.superheroesService.getSortedSuperheroes();
  }
}