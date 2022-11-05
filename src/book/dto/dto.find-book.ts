import {  IsNumber, IsString } from 'class-validator';

export class findBookDto {
  @IsString()
  ISBN: string;

  @IsString()
  title: string;

  @IsString()
  author: string;

  @IsNumber()
  publicationYear: number;

  @IsString()
  publication: string;

  @IsNumber()
  page: number;

  @IsNumber()
  limit: number;
}
