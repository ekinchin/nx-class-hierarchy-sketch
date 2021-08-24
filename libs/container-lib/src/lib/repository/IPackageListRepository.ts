import { IPackageListItem } from '../packageList';

export interface IPackageListRepository {
  load(code: string): Promise<IPackageListItem[]>;
  update(item: IPackageListItem): Promise<IPackageListItem[]>;
}
