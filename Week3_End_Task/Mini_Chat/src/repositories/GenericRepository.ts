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
      throw new Error(`Failed to add data:`);
    }
  }

  async getAllAsync(): Promise<T[]> {
    try {
      return await this.model.findAll();
    } catch (error) {
      console.error('Database error:', error);
      throw new Error('Failed to fetch data:');
    }
  }

  async getByIdAsync(id: number): Promise<T | null> {
    try {
      return await this.model.findByPk(id);
    } catch (error) {
      console.error('Error in getByIdAsync:', error);
      throw new Error(`Failed to fetch entity with id`);
    }
  }

  async deleteAsync(entity: T): Promise<void> {
    try {
      await this.model.destroy({
        where: { id: (entity as any).id },
      });
    } catch (error) {
      console.error('Error in deleteAsync:', error);
      throw new Error(`Failed to delete entity: `);
    }
  }

  async updateAsync(entity: T): Promise<void> {
    try {
      await entity.save();
    } catch (error) {
      console.error('Error in updateAsync:', error);
      throw new Error(`Failed to update entity:`);
    }
  }
}
