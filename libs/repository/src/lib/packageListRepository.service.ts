import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  IGenericRepository,
  PackageList,
  IPackageList,
  IPackageListItem
} from '@nx-class-hierarchy-sketch/container-lib';
import { Repository as RepositoryOrm } from 'typeorm';
import { Qr, PackageListC, ContainerC } from './entity';
import { PackageListMapper } from './mapping';

@Injectable()
export class PackgeListRepository implements IGenericRepository<IPackageListItem> {
  constructor(
    @InjectRepository(Qr)
    private qrRepositoryOrm: RepositoryOrm<Qr>,
    @InjectRepository(PackageListC)
    private packageListRepositoryOrm: RepositoryOrm<PackageListC>,
    @InjectRepository(ContainerC)
    private containerRepositoryOrm: RepositoryOrm<ContainerC>
  ) {
    console.log('packageListRepository');
  }

  async load(code: string): Promise<IPackageListItem> {
    // const qr = await this.qrRepositoryOrm.findOne({ code });
    // const packageListOrm = qr.packageLists;
    // const pacakgeListMapper = new PackageListMapper;
    // const pacakgeListDomain = packageListOrm.map((item) => pacakgeListMapper.mapToDomain(item));
    // return new PackageList(pacakgeListDomain, code);
    throw new Error('Not Implemented')
  }

  async update(packageList: IPackageListItem): Promise<IPackageListItem> {
    throw new Error('Not implemented');
    // if(packageList.packageListItems.length === 0) return packageList;
    // const qr = await this.qrRepositoryOrm.findOne({ code: packageList.code });

    // const packageListOrm: PackageListOrm[] = packageList.packageListItems.map((item) => ({
    //   code: qr,
    //   insertedAt: item.insertedAt,
    //   extractedAt: item.extractedAt,
    //   name: item.name,
    // }));
    // await this.packageListRepositoryOrm.save(packageListOrm);
    // return packageList;
  }
}
