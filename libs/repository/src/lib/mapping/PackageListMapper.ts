import { IPackageListItem } from '@nx-class-hierarchy-sketch/container-lib';
import { PackageListC } from '../entity/PackageList';
import { IMapper } from './IMapper';

export class PackageListMapper implements IMapper<IPackageListItem, PackageListC> {
  mapToDomain(entity: PackageListC): IPackageListItem {
    return {
      code: entity.code,
      name: entity.name,
      insertedAt: entity.insertedAt,
      extractedAt: entity.extractedAt,
    }
  }
  mapToStorage(): PackageListC {
    throw new Error('Not implemented');
  }
}
