import { IsNumber } from 'class-validator';

export class getBooksDto {
  @IsNumber()
  page: number;

  @IsNumber()
  limit: number;
}
