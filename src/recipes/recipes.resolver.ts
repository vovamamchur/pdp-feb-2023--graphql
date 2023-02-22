import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';

import { RecipesService } from './recipes.service';
import { Recipe } from './entities/recipe.entity';

import { CreateRecipeInput } from './dto/create-recipe.input';
import { UpdateRecipeInput } from './dto/update-recipe.input';
import { RecipesArgs } from './dto/recipes.args';

@Resolver(() => Recipe)
export class RecipesResolver {
  constructor(private readonly recipesService: RecipesService) {}

  @Mutation(() => Recipe)
  createRecipe(@Args('createRecipeInput') createRecipeInput: CreateRecipeInput) {
    return this.recipesService.create(createRecipeInput);
  }

  @Query(() => [Recipe], { name: 'recipes' })
  recipes(@Args() args: RecipesArgs) {
    return this.recipesService.findAll(args);
  }

  @Query(() => Recipe, { name: 'recipe' })
  recipe(@Args('id', { type: () => String }) id: string) {
    return this.recipesService.findOne(id);
  }

  @Mutation(() => Recipe)
  updateRecipe(@Args('id') id: string, @Args('updateRecipeInput') updateRecipeInput: UpdateRecipeInput) {
    return this.recipesService.update(id, updateRecipeInput);
  }

  @Mutation(() => Recipe)
  async removeRecipe(@Args('id') id: string) {
    return this.recipesService.remove(id);
  }
}
