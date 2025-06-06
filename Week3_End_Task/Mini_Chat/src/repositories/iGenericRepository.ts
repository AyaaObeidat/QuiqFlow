export interface IGenericRepository<T> {
  addAsync(data: T): Promise<void>;
  getAllAsync(): Promise<T[]>;
  getByIdAsync(id: number): Promise<T | null>;
  deleteAsync(entity: T): Promise<void>;
  updateAsync(entity: T): Promise<void>;
}
