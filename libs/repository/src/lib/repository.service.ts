import { IGenericRepository,IContainerType, IPackageListItem, IContainerListItem, ContainerFactory, PackageList} from '@nx-class-hierarchy-sketch/container-lib';
import { AbstractContainerType } from 'libs/container-lib/src/lib/containers/AbstractContainerType';

export class ContainerRepository implements IGenericRepository<AbstractContainerType> {
  constructor(private repo: unknown) { }

  async load(code: string): Promise<AbstractContainerType> {

    //загрузка из ОРМ
    const container: IContainerType = {
      code: 'www',
      createdAt: null,
      destroyedAt: null,
      invNo: 'invnumber',
      type: 'ContainerTypeA',
    };
    const packageListItem: IPackageListItem = { name: 'qqq', code: "sdsadasda" };
    const packageList = new PackageList([packageListItem], code);
    const containerList: IContainerListItem = {name: 'qqq', qr: "sdsadasda"};

    const containerFactory = new ContainerFactory();
    return containerFactory.create(container, packageList, [containerList]);
  }
  async update(container: AbstractContainerType): Promise<AbstractContainerType> {
    throw new Error(`Method not implemented. Container code: ${container.code}`);
  }
}
