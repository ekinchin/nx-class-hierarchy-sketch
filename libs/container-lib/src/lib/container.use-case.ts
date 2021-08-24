import { IContainerListRepository, IContainerRepository, IPackageListRepository } from './repository';

export class ContainerUseCase {
  constructor(
    private _containerRepository: IContainerRepository,
    private _packageListRepository: IPackageListRepository,
    private _containerListRepository: IContainerListRepository
  ) { }

  public async insertContainerToContainer(containerId: string, contentId: string) {
    const container = await this._containerRepository.load(containerId);
    const content = await this._containerRepository.load(contentId);

    if (container.containerListAppend(content)) {
      return true;
    }
    return false;
  }
}
