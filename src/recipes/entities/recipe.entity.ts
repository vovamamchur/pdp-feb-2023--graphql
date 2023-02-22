import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
@ObjectType({ description: 'recipe' })
export class Recipe {
  @PrimaryColumn()
  @PrimaryGeneratedColumn()
  @Field((type) => ID)
  id: string;

  @Column()
  @Field()
  title: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  description?: string;

  @Column({ type: 'varchar',  array: true })
  @Field((type) => [String])
  ingredients: string[];

  @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
  created_at: Date;

  @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
  updated_at: Date;
}
