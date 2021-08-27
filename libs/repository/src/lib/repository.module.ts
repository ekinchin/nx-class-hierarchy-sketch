import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ContainerRepository } from './containerRepository.service';
import { Container, PackageList, Qr, Role, Type } from './entity';
import { PackgeListRepository } from './packageListRepository.service';

@Module({
  imports: [TypeOrmModule.forFeature([Qr, Container, PackageList, Type, Role])],
  providers: [ContainerRepository, PackgeListRepository],
  exports: [ContainerRepository, PackgeListRepository],
})
export class ContainerDatabaseAdapter {}
