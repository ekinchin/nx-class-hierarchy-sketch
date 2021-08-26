import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ContainerRepository } from './containerRepository.service';
import { Container, PackageList, Qr } from './entity';
import { PackgeListRepository } from './packageListRepository.service';

@Module({
  imports: [TypeOrmModule.forFeature([Qr, Container, PackageList])],
  providers: [ContainerRepository, PackgeListRepository],
})
export class RepositoryService {}
