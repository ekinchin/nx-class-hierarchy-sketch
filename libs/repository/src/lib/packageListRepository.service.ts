import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  IGenericRepository,
  PackageList,
  IPackageList
} from '@nx-class-hierarchy-sketch/container-lib';
import { Repository as RepositoryOrm } from 'typeorm';
import { Qr, PackageList as PackageListOrm } from './entity';
import { PackageListMapper } from './mapping';

@Injectable()
export class PackgeListRepository implements IGenericRepository<IPackageList> {
  constructor(
    @InjectRepository(Qr)
    private qrRepositoryOrm: RepositoryOrm<Qr>,
    @InjectRepository(PackageListOrm)
    private packageListRepositoryOrm: RepositoryOrm<PackageListOrm>
  ) { }

  async load(code: string): Promise<IPackageList> {
    const qr = await this.qrRepositoryOrm.findOne({ code });
    const packageListOrm = qr.packageLists;
    const pacakgeListMapper = new PackageListMapper;
    const pacakgeListDomain = packageListOrm.map((item) => pacakgeListMapper.mapToDomain(item));
    return new PackageList(pacakgeListDomain, code);
  }
  async update(packageList: IPackageList): Promise<IPackageList> {
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
