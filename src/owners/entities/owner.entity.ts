import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Pet } from 'src/pets/entity/pets.entity';
import { Entity,OneToMany,  PrimaryGeneratedColumn,Column } from 'typeorm'


@Entity("owner")
@ObjectType()
export class Owner {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number

  @Column()
  @Field()
  name: string

  @OneToMany(() => Pet, pet => pet.owner)
  @Field(() => [Pet], {nullable: true})
  pets?: Pet[]
}
