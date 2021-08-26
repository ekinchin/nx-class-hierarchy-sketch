import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContainerRepositoryModule } from '@nx-class-hierarchy-sketch/repository';

@Module({
  imports: [ContainerRepositoryModule],
  controllers: [AppController],
  providers: [AppService, ContainerRepositoryModule],
})
export class AppModule {}
