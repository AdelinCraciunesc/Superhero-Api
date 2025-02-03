import { IsString, IsInt, Min, Max } from 'class-validator';

// Define the model for a superhero object
export class CreateSuperheroDto {
// use class validator to ensure name, superpower is string, humilityScore is int and between 1 and 10
  @IsString()
  name: string;

  @IsString()
  superpower: string;

  @IsInt()
  @Min(1)
  @Max(10)
  humilityScore: number;
}
