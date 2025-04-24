export interface IGenericRepository<T> {
    add(data: any): Promise<T>;
    getAll(): Promise<T[]>;
    getById(id: number): Promise<T | null>;
    update(id: number, data: any): Promise<T | null>;
    delete(id: number): Promise<boolean>;
  }
  