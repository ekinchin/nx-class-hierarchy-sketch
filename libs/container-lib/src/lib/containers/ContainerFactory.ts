import containersType from './entity';
import { AbstractContainerType } from './AbstractContainerType';
import { IPackageList } from '../packageList';
import { IContainerListItem } from '../containerList';
import { IContainerType } from './IContainerType';

export class ContainerFactory{
  create(
    container: IContainerType,
    packageList: IPackageList,
    containerList: IContainerListItem[]
  ): AbstractContainerType {
    const containerType = containersType[container.type];
    if (containerType) return new containerType(container, packageList, containerList);
    throw new Error('Unknown container type');
  }
}
