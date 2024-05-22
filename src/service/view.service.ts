import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateViewRequest } from "src/dto/startup.dto";
import { View } from "src/model/view.model";
import { Repository } from "typeorm";
import { StartupService } from "./startup.service";

@Injectable()
export class ViewService {
	constructor(
		@InjectRepository(View)
		private readonly viewRepository: Repository<View>,

		private readonly startupService: StartupService
	) {}

	async create(view: CreateViewRequest): Promise<void> {
		await this.startupService.incrementView(view.startupId);
		await this.viewRepository.insert({ startup: { id: view.startupId }, user_id: view.userId });
	}

	async findRecentsByUserId(userId: number): Promise<View[]> {
		return this.viewRepository.find({
			where: { user_id: userId },
			order: { timestamp: "DESC" },
			take: 20,
			relations: ["startup"],
		});
	}

	async findAllByStartupId(startupId: number): Promise<View[]> {
		return this.viewRepository.find({ where: { startup: { id: startupId } } });
	}

	async findAll(): Promise<View[]> {
		return this.viewRepository.find();
	}
}
