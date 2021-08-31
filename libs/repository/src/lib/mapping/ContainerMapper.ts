import { IContainerType } from '@nx-class-hierarchy-sketch/container-lib';
import { ContainerC } from '../entity';
import { IMapper } from './IMapper';

export class ContainerMapper implements IMapper<IContainerType, ContainerC> {
  mapToDomain(entity: ContainerC): IContainerType {
    const slim = (input: string): IContainerType['type'] => {
      if(input === 'ContainerTypeA' || input === 'ContainerTypeB') return input;
    }
    return {
      id: entity.id,
      createdAt: entity.createdAt,
      destroyedAt: entity.destroyedAt,
      invNo: entity.invNo,
      type: slim(entity.type.type),
    }
  }
  mapToStorage(): ContainerC {
    throw new Error('Not implemented');
  }

}
