import { IPackageList } from './IPackageList';
import { IPackageListItem } from './IPackageListItem';

export class PackageList implements IPackageList {
  constructor(
    private _packageList: IPackageListItem[],
    private _code: string
  ) { }

  get packageListItems(): IPackageListItem[] {
    return this._packageList;
  };

  get code(): string {
    return this._code;
  }

  append(item: string): IPackageListItem | Error {
    const isAlreadyExists = this._packageList.some(({ name }) => name === item);
    if (isAlreadyExists) return new Error('package is exists already');
    const insertedAt = (new Date()).toISOString();
    const packageItem = { code: this._code, name: item, insertedAt };
    this._packageList.push(packageItem);
    return packageItem;
  }

  remove(item: string): IPackageListItem | Error{
    const index = this._packageList.findIndex(({ name }) => name === item);
    if (index === -1) return new Error('package is not exists');
    this._packageList[index].extractedAt = (new Date()).toISOString();
    return this._packageList[index];
  }
}
