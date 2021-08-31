import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  AbstractContainerType,
  IGenericRepository,
  IContainerListItem,
  ContainerFactory,
  PackageList
} from '@nx-class-hierarchy-sketch/container-lib';
import { Equal, Repository } from 'typeorm';
import { ContainerC, Qr, Type, PackageListC } from './entity';
import { ContainerMapper, PackageListMapper } from './mapping';

@Injectable()
export class ContainerRepository implements IGenericRepository<AbstractContainerType> {
  containerMapper: ContainerMapper;
  packageListMapper: PackageListMapper;
  constructor(
    @InjectRepository(PackageListC)
    private packageListRepositoryOrm: Repository<PackageListC>,
    @InjectRepository(ContainerC)
    private containerRepositoryOrm: Repository<ContainerC>,
    @InjectRepository(Qr)
    private qrRepositoryOrm: Repository<Qr>,
  ) {
    console.log('ContainerRepository constructor');
    this.containerMapper = new ContainerMapper();
    this.packageListMapper = new PackageListMapper();
  }

  async load(code: string): Promise<AbstractContainerType> {

    const containerOrm = await this.containerRepositoryOrm.findOne(code, { relations: ['type'] });
    const containerDomain = this.containerMapper.mapToDomain(containerOrm);

    const qr = await this.qrRepositoryOrm.findOne({
      where: { container: Equal(containerOrm.id)}
    });
    const packageListOrm = await this.packageListRepositoryOrm.find({
      relations: ['code2'],
      where: { code: Equal(qr.code)}
    });
    const pacakgeListDomain = packageListOrm.map(p => this.packageListMapper.mapToDomain(p));
    const packageList = new PackageList(pacakgeListDomain, code);
    const containerList: IContainerListItem = {name: 'qqq', code: "sdsadasda"};
    const containerFactory = new ContainerFactory();
    return containerFactory.create(containerDomain, packageList, [containerList]);
  }
  async update(container: AbstractContainerType): Promise<AbstractContainerType> {
    await this.containerRepositoryOrm.save({
      id: container.id,
      createdAt: container.createdAt,
      destroyedAt: container.destroyedAt,
    });
    return container;
  }
}
