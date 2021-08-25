import { AbstractContainerType } from './containers/AbstractContainerType';
import { IPackageListItem } from './packageList'
import { IGenericRepository } from './repository';
export class ContainerUseCase {
  constructor(
    private _containerRepository: IGenericRepository<AbstractContainerType>,
    private _packageListRepository: IGenericRepository<IPackageListItem>,
  ) { }

  public async insertPackageToContainer(containerId: string, content: string) {
    const container = await this._containerRepository.load(containerId);

    const appendedItem = container.packageListAppend(content);
    if (appendedItem instanceof Error) return appendedItem;
    const repositoryUpdateRresult = this._packageListRepository.update(appendedItem);
    if (repositoryUpdateRresult instanceof Error) return repositoryUpdateRresult;
    return true;
  }
}
