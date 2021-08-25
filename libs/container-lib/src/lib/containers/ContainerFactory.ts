import { ContainerType } from './ContainerType';
import containersType from './entity';
import { AbstractContainerType } from './AbstractContainerType';
import { IPackageList } from '../packageList';
import { IContainerListItem } from '../containerList';

export class ContainerFactory{
  create(
    container: ContainerType,
    packageList: IPackageList,
    containerList: IContainerListItem[]
  ): AbstractContainerType {
    const containerType = containersType[container.type];
    if (containerType) return new containerType(container, packageList, containerList);
    throw new Error('Unknown container type');
  }
}
