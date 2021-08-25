export interface IGenericRepository<T> {
  load(code: string): Promise<T>;
  update(entity: T): Promise<T>;
}
