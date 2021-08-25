import { IPackageList } from './IPackageList';
import { IPackageListItem } from './IPackageListItem';

export class PackageList implements IPackageList {
  private _commands: [{
    command: 'Append' | 'Remove',
    packageItem: IPackageListItem,
  }];

  constructor(
    private _packageList: IPackageListItem[],
    private _code: string) { }

  get packageListItems(): IPackageListItem[] {
    const result = [...this._packageList];
    for (const {command, packageItem } of this._commands) {
      if(command === 'Append') result.push(packageItem);
      if(command === 'Remove') result.filter(({name}) => name === packageItem.name);
    }
    return result;
  }

  append(item: string): IPackageListItem | Error {
    const isAlreadyExists = this.packageListItems.some(({ name }) => name === item);
    if (isAlreadyExists) return new Error('package is exists already');
    const insertedAt = (new Date()).toISOString();
    const packageItem = { code: this._code, name: item, insertedAt };
    this._commands.push({ command: 'Append', packageItem: packageItem });
    return packageItem;
  }

  remove(item: string): IPackageListItem | Error{
    const existsItem = this.packageListItems.find(({ name }) => name === item);
    if (!existsItem) return new Error('package is not exists');
    const extractedAt = (new Date()).toISOString();
    const packageItem = { ...existsItem, extractedAt };
    this._commands.push({ command: 'Remove', packageItem: packageItem });
    return packageItem;
  }
}
