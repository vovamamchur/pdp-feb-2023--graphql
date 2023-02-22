import { InputType, Field, PartialType,  } from '@nestjs/graphql';
import { IsOptional, IsNotEmpty } from 'class-validator';

import { CreateRecipeInput } from './create-recipe.input';

@InputType()
export class UpdateRecipeInput extends PartialType(CreateRecipeInput) {
  @IsNotEmpty()
  @IsOptional()
  @Field({ nullable: true })
  title?: string;

  @IsNotEmpty()
  @IsOptional()
  @Field({ nullable: true })
  description?: string;

  @IsNotEmpty()
  @IsOptional()
  @Field((type) => [String], { nullable: true })
  ingredients?: string[];
}
