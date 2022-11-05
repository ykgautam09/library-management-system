import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateBookDto {
  @IsString()
  ISBN: string;

  @IsNotEmpty()
  @IsString()
  title: string;

  @IsString()
  @IsNotEmpty()
  author: string;

  @IsNumber()
  publicationYear: number;

  @IsString()
  publication: string;
}
