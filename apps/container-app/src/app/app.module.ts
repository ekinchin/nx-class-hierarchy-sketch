import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContainerDatabaseAdapter } from '@nx-class-hierarchy-sketch/repository';
import { ContainerRepositoryModule } from '@nx-class-hierarchy-sketch/primary-database-connection';

@Module({
  imports: [ContainerRepositoryModule, ContainerDatabaseAdapter],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
