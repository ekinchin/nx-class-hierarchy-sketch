import { AbstractContainerType} from './AbstractContainerType'
import { IContainerListItem } from '../containerList';
import { IPackageListItem } from '../packageList';
import { IContainer } from './IContainerType';

export class ContainerTypeA extends AbstractContainerType {
  constructor(
    _container: IContainer,
    _packageList: IPackageListItem[],
    _containerList: IContainerListItem[],
  ) {
    super(_container, _packageList, _containerList);
  }

  packageListAppend(): boolean {
    return false;
  }
  get packageList(): IPackageListItem[] {
    return [];
  }
  packageListRemove(): boolean {
    return false;
  }
  containerListAppend(): boolean {
    return false;
  }
  get containerList(): IContainerListItem[] {
    return [];
  }
  containerListRemove(): boolean {
    return false;
  }
}
