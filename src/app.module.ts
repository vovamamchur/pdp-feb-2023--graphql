import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

import { RecipesModule } from './recipes/recipes.module';
import { DatabaseModule } from './database/database.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      sortSchema: true,
    }),
    RecipesModule,
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
