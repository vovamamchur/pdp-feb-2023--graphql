import { Module } from '@nestjs/common';

import { DatabaseModule } from 'src/database/database.module';

import { RecipesService } from './recipes.service';
import { RecipesResolver } from './recipes.resolver';
import { RecipesDBProvider } from './recipes.provider';


@Module({
  imports: [DatabaseModule],
  providers: [RecipesResolver, RecipesService, RecipesDBProvider],
})
export class RecipesModule {
}
