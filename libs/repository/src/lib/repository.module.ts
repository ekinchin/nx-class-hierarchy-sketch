import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ContainerC, PackageListC, Qr, Role, Type } from './entity';
import { ContainerRepository } from './containerRepository.service';
import { PackgeListRepository } from './packageListRepository.service';

@Module({
  imports: [TypeOrmModule.forFeature([Qr, ContainerC, PackageListC, Type, Role])],
  providers: [ContainerRepository, PackgeListRepository],
  exports: [ContainerRepository, PackgeListRepository],
})
export class ContainerDatabaseAdapter {}
