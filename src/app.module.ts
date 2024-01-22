import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RickController } from './rick/rick.controller';
import { MortyController } from './morty/morty.controller';

@Module({
  imports: [],
  controllers: [AppController, RickController, MortyController],
  providers: [AppService],
})
export class AppModule {}
