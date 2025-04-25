import { Model, ModelStatic } from 'sequelize';
import { IGenericRepository } from './iGenericRepository';

export class GenericRepository<T extends Model> implements IGenericRepository<T> {
  protected model: ModelStatic<T>;

  constructor(model: ModelStatic<T>) {
    this.model = model;
  }
  async addAsync(data: any): Promise<void> {
    await this.model.create(data);
  }
  async getAllAsync(): Promise<T[]> {
    return await this.model.findAll();
  }
  async getByIdAsync(id: number): Promise<T | null> {
    return await this.model.findByPk(id);
  }
  async deleteAsync(entity: T): Promise<void> {
    await this.model.destroy({
      where: { id: (entity as any).id },
    });
  }

  async updateAsync(entity: T): Promise<void> {
    await entity.update(entity);
  }
}
