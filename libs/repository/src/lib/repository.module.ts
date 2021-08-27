
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Container, PackageList, Qr, Role, Type } from './entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'wms',
      synchronize: false,
      entities: [Qr, Container, PackageList, Type, Role],
    }),
  ],
})
export class ContainerRepositoryModule {}
