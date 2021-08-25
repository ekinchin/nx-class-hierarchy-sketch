import containersType from './entity';

export interface IContainerType {
  code: string;
  type: keyof typeof containersType;
  invNo: string;
  createdAt: string;
  destroyedAt: string;
}
