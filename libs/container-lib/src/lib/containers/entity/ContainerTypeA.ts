import { AbstractContainerType} from '../AbstractContainerType'
import { IContainerListItem } from '../../containerList';
import { IPackageListItem } from '../../packageList';

export class ContainerTypeA extends AbstractContainerType {
  packageListAppend(): IPackageListItem | Error {
    return new Error('Container can not contain any item');
  }
  packageListRemove(): IPackageListItem | Error {
    return new Error('Container can not contain any item');
  }
  containerListAppend(): Error | IContainerListItem {
    return new Error('Container can not contain any item');
  }
  containerListRemove(): Error | IContainerListItem {
    return new Error('Container can not contain any item');
  }
}
