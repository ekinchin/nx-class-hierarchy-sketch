import { Injectable } from '@nestjs/common';
import { ContainerUseCase } from '@nx-class-hierarchy-sketch/container-lib';
import { ContainerRepository, PackgeListRepository } from '@nx-class-hierarchy-sketch/repository';
@Injectable()
export class AppService {
  private _containerUseCase: ContainerUseCase;

  constructor(
      private _containerRepository: ContainerRepository,
      private _packageListRepository: PackgeListRepository,
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
