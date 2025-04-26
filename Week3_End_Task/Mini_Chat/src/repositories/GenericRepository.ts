import { Model, ModelStatic } from 'sequelize';
import { IGenericRepository } from './iGenericRepository';

export class GenericRepository<T extends Model> implements IGenericRepository<T> {
  protected model: ModelStatic<T>;

  constructor(model: ModelStatic<T>) {
    this.model = model;
  }

  async addAsync(data: any): Promise<void> {
    try {
      await this.model.create(data);
    } catch (error) {
      console.error('Error in addAsync:', error);
      throw error;
    }
  }

  async getAllAsync(): Promise<T[]> {
    try {
      return await this.model.findAll();
    } catch (error) {
      console.error('Error in getAllAsync:', error);
      throw error;
    }
  }

  async getByIdAsync(id: number): Promise<T | null> {
    try {
      return await this.model.findByPk(id);
    } catch (error) {
      console.error('Error in getByIdAsync:', error);
      throw error;
    }
  }

  async deleteAsync(entity: T): Promise<void> {
    try {
      await this.model.destroy({
        where: { id: (entity as any).id },
      });
    } catch (error) {
      console.error('Error in deleteAsync:', error);
      throw error;
    }
  }

  async updateAsync(entity: T): Promise<void> {
    try {
      await entity.update(entity);
    } catch (error) {
      console.error('Error in updateAsync:', error);
      throw error;
    }
  }
}
