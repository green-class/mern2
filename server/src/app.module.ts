import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import env from './env';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { FilesModule } from './files/files.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [MongooseModule.forRoot(env.MONGO_URL), AuthModule, UsersModule, FilesModule, ProductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
