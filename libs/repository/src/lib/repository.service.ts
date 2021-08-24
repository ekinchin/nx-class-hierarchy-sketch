import { IContainerRepository,IContainerType, IPackageListItem, IContainerListItem} from '@nx-class-hierarchy-sketch/container-lib';
import { AbstractContainerType } from 'libs/container-lib/src/lib/containers/AbstractContainerType';
import { ContainerTypeA, ContainerTypeB } from '@nx-class-hierarchy-sketch/container-lib'

const containersType = { ContainerTypeA, ContainerTypeB };

export class ContainerRepository implements IContainerRepository {
  constructor(private repo: unknown) { }

  async load(): Promise<AbstractContainerType> {

    //загрузка из ОРМ
    const container: IContainerType = {
      code: 'www',
      createdAt: null,
      destroyedAt: null,
      invNo: 'invnumber',
      type: 'ContainerTypeA',
    };
    const packageList: IPackageListItem = {name: 'qqq', qr: "sdsadasda"};
    const containerList: IContainerListItem = {name: 'qqq', qr: "sdsadasda"};

    const containerType = containersType[container.type];
    if (containerType) return new containerType(container, [packageList], [containerList]);
    throw new Error('Unknown container type');
  }
  async update(container: AbstractContainerType): Promise<AbstractContainerType> {
    throw new Error(`Method not implemented. Container code: ${container.code}`);
  }
}
