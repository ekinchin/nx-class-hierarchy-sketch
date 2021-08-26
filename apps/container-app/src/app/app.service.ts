import { Injectable } from '@nestjs/common';
import { AbstractContainerType, ContainerUseCase, IGenericRepository, IPackageListItem } from '@nx-class-hierarchy-sketch/container-lib';
@Injectable()
export class AppService {
  private _containerUseCase: ContainerUseCase;

  constructor(
      private _containerRepository: IGenericRepository<AbstractContainerType>,
      private _packageListRepository: IGenericRepository<IPackageListItem>,
  ) {
    this._containerUseCase = new ContainerUseCase(_containerRepository, _packageListRepository);
  }
  getData(): { message: string } {
    return { message: 'Welcome to ContainerApp!' };
  }

  async insert(containerId: string, content: string) {
    console.log(`containerid: ${containerId}, content: ${content}`);
    console.log(await this._containerUseCase.insertPackageToContainer(containerId, content));
  }
}
