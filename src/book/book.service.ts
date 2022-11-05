import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Book } from './book.schema';
import { Types } from 'mongoose';
import { findBookDto } from './dto/dto.find-book';

@Injectable()
export class BookService {
  constructor(@InjectModel(Book.name) private bookModel: Model<Book>) {}

  // pagination to get all books, default first page with 10 entry
  async getBooks(page: number, limit: number): Promise<Book[]> {
    if (!page) page = 1;
    if (!limit) limit = 10;
    const skip = (page - 1) * limit;
    return await this.bookModel.find().skip(skip).limit(limit).exec();
  }
  async findBooks(query: Partial<findBookDto>): Promise<Book[]> {
    // eslint-disable-next-line prefer-const
    let { page, limit, ...bookQuery } = query;
    if (page === null) page = 1;
    if (limit === null) limit = 10;
    const skip = (page - 1) * limit;
    console.log(bookQuery,"------");
    return await this.bookModel
      .find()
      .where( bookQuery )
      .skip(skip)
      .limit(limit)
      .exec();
  }
  async getBook(id: string): Promise<Book> {
    const bookId = new Types.ObjectId(id);
    return await this.bookModel.findById(bookId).exec();
  }

  async createBook(bookData: Book): Promise<any> {
    const newBook = new this.bookModel(bookData);
    const bookId = await newBook.save();
    console.log(bookId);
    return bookId;
  }

  async updateBook(id: string, bookData: Partial<Book>) {
    console.log(id, typeof id, '++++++++');
    const bookId = new Types.ObjectId(id);
    return await this.bookModel
      .findByIdAndUpdate(bookId, bookData, { returnOriginal: false })
      .exec();
  }
  async deleteBook(id: string) {
    console.log(id, typeof id, '++++++++');
    const bookId = new Types.ObjectId(id);
    return await this.bookModel.findByIdAndDelete(bookId).exec();
  }
}
