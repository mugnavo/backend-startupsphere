import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { EntityManage } from "src/model/entitymanage.model";
import { Repository } from "typeorm";
import { CreateEntityManageRequest } from "src/dto/entitymanage.dto";

@Injectable()
export class EntityManageService {
  constructor(
    @InjectRepository(EntityManage)
    private readonly entityManageRepository: Repository<EntityManage>
  ) {}

  async create(entityManageRequest: CreateEntityManageRequest): Promise<EntityManage> {
    const entityManage = this.entityManageRepository.create({
      user: { id: entityManageRequest.userId }, // Set the user ID
      startup: { id: entityManageRequest.startupId }, // Set the startup ID
      investor: entityManageRequest.investorId ? { id: entityManageRequest.investorId } : null, // Set investor ID if present
    });

    return this.entityManageRepository.save(entityManage);
  }

  async findAll(): Promise<EntityManage[]> {
    return this.entityManageRepository.find();
  }

  async findOneById(id: number): Promise<EntityManage | null> {
    return this.entityManageRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.entityManageRepository.delete(id);
  }
}
