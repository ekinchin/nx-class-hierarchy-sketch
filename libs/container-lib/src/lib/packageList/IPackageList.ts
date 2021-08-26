import { IPackageListItem } from './IPackageListItem';

export interface IPackageList {
  packageListItems: IPackageListItem[];
  code: string;
  append(item: string): IPackageListItem | Error;
  remove(item: string): IPackageListItem | Error;
}
