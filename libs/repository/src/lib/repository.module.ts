
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Container, PackageList, Qr, Role, Type, TypeRole } from './entity';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'wms',
      entities: [Container, PackageList, Qr, Role, Type, TypeRole],
      synchronize: false,
    }),
  ],
})
export class AppModule {}
