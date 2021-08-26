import { IPackageListItem } from '@nx-class-hierarchy-sketch/container-lib';
import { PackageList } from '../entity/PackageList';
import { IMapper } from './IMapper';

export class PackageListMapper implements IMapper<IPackageListItem, PackageList> {
  mapToDomain(entity: PackageList): IPackageListItem {
    return {
      code: entity.code,
      name: entity.name,
      insertedAt: entity.insertedAt,
      extractedAt: entity.extractedAt,
    }
  }
  mapToStorage(): PackageList {
    throw new Error('Not implemented');
  }
}
