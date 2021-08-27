import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContainerRepositoryModule, RepositoryService } from '@nx-class-hierarchy-sketch/repository';

@Module({
  imports: [ContainerRepositoryModule, RepositoryService],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
