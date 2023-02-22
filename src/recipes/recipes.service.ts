import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

import { CreateRecipeInput } from './dto/create-recipe.input';
import { UpdateRecipeInput } from './dto/update-recipe.input';
import { RecipesArgs } from './dto/recipes.args';

import { Recipe } from './entities/recipe.entity';

@Injectable()
export class RecipesService {
  constructor(
    @Inject('RECIPES_REPOSITORY') private recipesRepository: Repository<Recipe>,
  ) {
  }

  async create(createRecipeInput: CreateRecipeInput) {
    const res = await this.recipesRepository.create(createRecipeInput);
    await this.recipesRepository.save(res);
    return res;
  }

  findAll(args: RecipesArgs) {
    return this.recipesRepository.find(args);
  }

  findOne(id: string) {
    return this.recipesRepository.findOneBy({ id });
  }

  async update(id: string, payload: UpdateRecipeInput) {
    const recipe = await this.recipesRepository.findOneBy({ id });
    await this.recipesRepository.update({ id }, payload);

    return recipe;
  }

  async remove(id: string) {
    const recipe = await this.recipesRepository.findOneBy({ id });
    await this.recipesRepository.delete({ id });

    return recipe;
  }
}
