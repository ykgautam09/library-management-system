import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookModule } from './book/book.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(), // dotenv file setup
    MongooseModule.forRoot(process.env.MONGODB_CONNECTION_STRING), // mongodb connection
    BookModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
