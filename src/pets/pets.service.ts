import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm/dist';
import { Owner } from 'src/owners/entities/owner.entity';
import { OwnersService } from 'src/owners/owners.service';
import { Repository } from 'typeorm';
import { CreatePetInput } from './dto/create-pet.input';
import { Pet } from './entity/pets.entity';

@Injectable()
export class PetsService {
    constructor(@InjectRepository(Pet) private repo: Repository<Pet>,
                        private ownersService: OwnersService ) {}

    async findAll(): Promise<Pet[]> {
        return this.repo.find()
    }

    async createPet(createPetInput: CreatePetInput): Promise<Pet> {
        let newtPet =  this.repo.create(createPetInput)

        return this.repo.save(newtPet)
    }

    findOne(id: number): Promise<Pet> {
        return this.repo.findOneOrFail({where: {id: id}})
    }

    getOwner(ownerId: number): Promise<Owner> {
        return this.ownersService.findOne(ownerId)
    }
}
