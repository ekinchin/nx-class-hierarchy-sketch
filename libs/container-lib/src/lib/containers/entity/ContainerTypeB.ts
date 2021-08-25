import { AbstractContainerType} from '../AbstractContainerType'
import { IContainerListItem } from '../../containerList';
import { IPackageListItem } from '../../packageList';

export class ContainerTypeB extends AbstractContainerType {
  packageListAppend(item: string): IPackageListItem | Error {
    return this._packageList.append(item);
  }
  packageListRemove(item: string): IPackageListItem | Error {
    return this._packageList.remove(item);
  }
  containerListAppend(): Error | IContainerListItem {
    return new Error('Method not implemented.');
  }
  containerListRemove(): Error | IContainerListItem {
    return new Error('Method not implemented.');
  }
}
