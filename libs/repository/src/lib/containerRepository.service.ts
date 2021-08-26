import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  AbstractContainerType,
  IGenericRepository,
  IContainerListItem,
  ContainerFactory,
  PackageList
} from '@nx-class-hierarchy-sketch/container-lib';
import { Repository as RepositoryOrm } from 'typeorm';
import { Container, Qr } from './entity';
import { ContainerMapper, PackageListMapper } from './mapping';

@Injectable()
export class ContainerRepository implements IGenericRepository<AbstractContainerType> {
  constructor(
    @InjectRepository(Qr)
    private qrRepositoryOrm: RepositoryOrm<Qr>,
    @InjectRepository(Container)
    private containerRepositoryOrm: RepositoryOrm<Container>
  ) { }

  async load(code: string): Promise<AbstractContainerType> {
    const qr = await this.qrRepositoryOrm.findOne({ code });

    const containerOrm = qr.container;
    const containerDomain = (new ContainerMapper).mapToDomain(containerOrm);


    const packageListOrm = qr.packageLists;
    const pacakgeListMapper = new PackageListMapper;
    const pacakgeListDomain = packageListOrm.map((item) => pacakgeListMapper.mapToDomain(item));
    const packageList = new PackageList(pacakgeListDomain, code);

    const containerList: IContainerListItem = {name: 'qqq', code: "sdsadasda"};

    const containerFactory = new ContainerFactory();
    return containerFactory.create(containerDomain, packageList, [containerList]);
  }
  async update(container: AbstractContainerType): Promise<AbstractContainerType> {
    const containerOrm = {
      id: container.id,
      createdAt: container.createdAt,
      destroyedAt: container.destroyedAt,
    };
    await this.containerRepositoryOrm.save(containerOrm);
    return container;
  }
}
