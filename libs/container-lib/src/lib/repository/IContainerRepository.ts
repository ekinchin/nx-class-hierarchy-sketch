import { AbstractContainerType } from '../containers/AbstractContainerType';

export interface IContainerRepository {
  load(code: string): Promise<AbstractContainerType>;
  update(container: AbstractContainerType): Promise<AbstractContainerType>;
}
