import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
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

	async create(view: View): Promise<View> {
		await this.startupService.incrementView(view.startup.id);
		return this.viewRepository.save(view);
	}

	async findAllByStartupId(startupId: number): Promise<View[]> {
		return this.viewRepository.find({ where: { startup: { id: startupId } } });
	}

	async findAll(): Promise<View[]> {
		return this.viewRepository.find();
	}
}
