import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post } from "@nestjs/common";
import { EntityManageService } from "src/service/entitymanage.service";
import { CreateEntityManageRequest } from "src/dto/entitymanage.dto";
import { EntityManage } from "src/model/entitymanage.model";

@Controller("/entity-manage")
export class EntityManageController {
  constructor(private readonly entityManageService: EntityManageService) {}

  @HttpCode(HttpStatus.OK)
  @Get("/")
  getAll(): Promise<EntityManage[]> {
    return this.entityManageService.findAll();
  }

  @HttpCode(HttpStatus.OK)
  @Get("/:id")
  getOneById(@Param("id") id: number): Promise<EntityManage | null> {
    return this.entityManageService.findOneById(id);
  }

  @HttpCode(HttpStatus.CREATED)
  @Post("/")
  create(@Body() entityManageRequest: CreateEntityManageRequest): Promise<EntityManage> {
    return this.entityManageService.create(entityManageRequest);
  }

  @HttpCode(HttpStatus.GONE)
  @Delete("/:id")
  delete(@Param("id") id: number): Promise<void> {
    return this.entityManageService.remove(id);
  }
}
