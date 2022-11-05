import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BookDocument = Book & Document;

@Schema()
export class Book {
  @Prop()
  ISBN: string;

  @Prop()
  title: string;

  @Prop()
  author: string;

  @Prop()
  publicationYear: number;

  @Prop()
  publication: string;
}

export const BookSchema = SchemaFactory.createForClass(Book);
