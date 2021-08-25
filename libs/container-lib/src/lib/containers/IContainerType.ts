import containersType from './entity';

export interface IContainerType {
  id: number;
  type: keyof typeof containersType;
  invNo: string;
  createdAt: string;
  destroyedAt: string;
}
