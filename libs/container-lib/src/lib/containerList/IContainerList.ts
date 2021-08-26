import { IContainerListItem } from './IContainerListItem';

export interface IContainerList {
  containerListItems: IContainerListItem[];
  append(item: string): IContainerListItem | Error;
  remove(item: string): IContainerListItem | Error;
}
