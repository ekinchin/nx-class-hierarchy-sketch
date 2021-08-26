import { availableContainersType } from './entity';

export interface IContainerType {
  id: number;
  type: keyof typeof availableContainersType;
  invNo: string;
  createdAt: string;
  destroyedAt: string;
}
