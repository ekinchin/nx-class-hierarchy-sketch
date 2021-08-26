import { IContainerList } from './IContainerList';
import { IContainerListItem } from './IContainerListItem';

export class ContainerList implements IContainerList {
  private _commands: [{
    command: 'Append' | 'Remove',
    containerItem: IContainerListItem,
  }];

  constructor(
    private _containerList: IContainerListItem[],
    private _code: string) { }

  get containerListItems(): IContainerListItem[] {
    const result = [...this._containerList];
    for (const {command, containerItem } of this._commands) {
      if(command === 'Append') result.push(containerItem);
      if(command === 'Remove') result.filter(({name}) => name === containerItem.name);
    }
    return result;
  }

  append(item: string): IContainerListItem | Error {
    const isAlreadyExists = this.containerListItems.some(({ name }) => name === item);
    if (isAlreadyExists) return new Error('package is exists already');
    const insertedAt = (new Date()).toISOString();
    const containerItem = { code: this._code, name: item, insertedAt };
    this._commands.push({ command: 'Append', containerItem });
    return containerItem;
  }

  remove(item: string): IContainerListItem | Error{
    const existsItem = this.containerListItems.find(({ name }) => name === item);
    if (!existsItem) return new Error('package is not exists');
    const extractedAt = (new Date()).toISOString();
    const containerItem = { ...existsItem, extractedAt };
    this._commands.push({ command: 'Remove', containerItem });
    return containerItem;
  }
}
