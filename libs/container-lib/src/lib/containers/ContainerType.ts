import { IContainerType } from './IContainerType';

export class ContainerType implements IContainerType {
  code: string;
  type: string;
  invNo: string;
  createdAt: string;
  destroyedAt: string;
}
