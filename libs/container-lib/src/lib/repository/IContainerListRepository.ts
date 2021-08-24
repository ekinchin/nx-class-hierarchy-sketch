import { IContainerListItem } from '../containerList';

export interface IContainerListRepository {
  load(code: string): Promise<IContainerListItem[]>;
  update(item: IContainerListItem): Promise<IContainerListItem[]>;
}
