import { DataSource } from 'typeorm';
import { Recipe } from './entities/recipe.entity';

export const RecipesDBProvider = {
  provide: 'RECIPES_REPOSITORY',
  useFactory: (dataSource: DataSource) => dataSource.getRepository(Recipe),
  inject: ['DATA_SOURCE'],
};
