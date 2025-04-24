import { Model, ModelStatic } from "sequelize";
import { IGenericRepository } from "./iGenericRepository";

export class GenericRepository<T extends Model,> implements IGenericRepository<T> {
  protected model: ModelStatic<T>;

  constructor(model: ModelStatic<T>) {
    this.model = model;
  }

  async add(data: any): Promise<T> {
    return this.model.create(data);
  }

  
  async getAll(): Promise<T[]> {
    return this.model.findAll();
  }

  async getById(id: number): Promise<T | null> {
    return this.model.findByPk(id);
  }

  async update(id: number, data: any): Promise<T | null> {
    const item = await this.model.findByPk(id);
    if (!item) return null;
    return await item.update(data as any);
  }

  async delete(id: number): Promise<boolean> {
    const item = await this.model.findByPk(id);
    if (!item) return false;
    await item.destroy();
    return true;
  }
}
