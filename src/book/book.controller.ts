import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/dto.create-book';
import { Book } from './book.schema';
import { findBookDto } from './dto/dto.find-book';

@Controller('api/book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get()
  async getBooks(
    @Query('limit') limit?: number,
    @Query('page') page?: number,
  ): Promise<Book[]> {
    return await this.bookService.getBooks(page, limit);
  }
  @Get('find')
  async findBooks(@Query() query: Partial<findBookDto>): Promise<Book[]> {
    return await this.bookService.findBooks(query);
  }
  @Get('/:id')
  async getBook(@Param('id') bookId: string): Promise<Book> {
    return await this.bookService.getBook(bookId);
  }

  @Post()
  async addBook(@Body() bookData: CreateBookDto) {
    return await this.bookService.createBook(bookData);
  }

  @Patch('/:id')
  async updateBook(
    @Param('id') bookId: string,
    @Body() bookData: Partial<Book>,
  ) {
    return await this.bookService.updateBook(bookId, bookData);
  }

  @Delete('/:id')
  async deleteBook(@Param('id') bookId: string) {
    return await this.bookService.deleteBook(bookId);
  }

  @Get('/hello')
  hello() {
    return 'Up';
  }
}
