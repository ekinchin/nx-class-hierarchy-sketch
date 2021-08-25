import { IContainerType } from './IContainerType';
import { IPackageList, IPackageListItem } from '../packageList';
import { IContainerListItem } from '../containerList';

export abstract class AbstractContainerType {
  constructor(
    private _container: IContainerType,
    protected _packageList: IPackageList,
    private _containerList: IContainerListItem[],
  ) { }
  get code() {
    return this._container.code;
  }

  get type() {
    return this._container.type;
  }

  get createdAt() {
    return this._container.createdAt;
  }

  get destroyedAt() {
    return this._container.destroyedAt;
  }

  get packageList():IPackageListItem[] {
    return this._packageList.packageListItems;
  }

  get containerList() {
    return this._containerList;
  }

  abstract packageListAppend(item: string): IPackageListItem | Error;
  abstract packageListRemove(item: string): IPackageListItem | Error;

  abstract containerListAppend(item: AbstractContainerType): IContainerListItem | Error;
  abstract containerListRemove(item: AbstractContainerType): IContainerListItem | Error;
}
