import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm/dist';
import { Pet } from 'src/pets/entity/pets.entity';
import { PetsService } from 'src/pets/pets.service';
import { Repository } from 'typeorm';
import { CreateOwnerInput } from './dto/create-owner.input';
import { UpdateOwnerInput } from './dto/update-owner.input';
import { Owner } from './entities/owner.entity';

@Injectable()
export class OwnersService {
  constructor(@InjectRepository(Owner) private repo: Repository<Owner>,
                    private petsService: PetsService) {}

  create(createOwnerInput: CreateOwnerInput) {
   const newOwner = this.repo.create(createOwnerInput)

   return this.repo.save(newOwner)
  }

  findAll() {
    return this.repo.find()
  }

  findOne(id: number) {
    return this.repo.findOneOrFail({where: {id: id}})
  }

  update(id: number, updateOwnerInput: UpdateOwnerInput) {
    return `This action updates a #${id} owner`;
  }


  remove(id: number) {
    return `This action removes a #${id} owner`;
  }
}
