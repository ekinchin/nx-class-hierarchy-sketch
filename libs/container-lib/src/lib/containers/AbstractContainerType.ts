import { IContainerType } from './IContainerType';
import { IPackageListItem } from '../packageList';
import { IContainerListItem } from '../containerList';

export abstract class AbstractContainerType {
  constructor(
    private _container: IContainerType,
    private _packageList: IPackageListItem[],
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

  abstract packageListAppend(): boolean;
  abstract get packageList(): IPackageListItem[];
  abstract packageListRemove(): boolean;

  abstract containerListAppend(item: AbstractContainerType): boolean;
  abstract get containerList(): IContainerListItem[];
  abstract containerListRemove(item: AbstractContainerType): boolean;
}
