import { AbstractContainerType} from './AbstractContainerType'
import { IContainerListItem } from '../containerList';
import { IPackageListItem } from '../packageList';
import { IContainer } from './IContainerType';

export class ContainerTypeB extends AbstractContainerType {
  constructor(
    _container: IContainer,
    _packageList: IPackageListItem[],
    _containerList: IContainerListItem[],
  ) {
    super(_container, _packageList, _containerList);
  }

  packageListAppend(): boolean {
    throw new Error('Method not implemented.');
  }
  get packageList(): IPackageListItem[] {
    throw new Error('Method not implemented.');
  }
  packageListRemove(): boolean {
    throw new Error('Method not implemented.');
  }
  containerListAppend(): boolean {
    throw new Error('Method not implemented.');
  }
  get containerList(): IContainerListItem[] {
    throw new Error('Method not implemented.');
  }
  containerListRemove(): boolean {
    throw new Error('Method not implemented.');
  }
}
