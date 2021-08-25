import { IContainerType } from '@nx-class-hierarchy-sketch/container-lib';
import { Container } from '../entity';
import { IMapper } from './IMapper';

export class ContainerMapper implements IMapper<IContainerType, Container> {
  mapToDomain(entity: Container): IContainerType {
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
  mapToStorage(): Container {
    throw new Error('Not implemented');
  }

}
