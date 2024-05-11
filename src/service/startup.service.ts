import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Startup } from "src/model/startup.model";
import { Repository } from "typeorm";

@Injectable()
export class StartupService {
	constructor(
		@InjectRepository(Startup)
		private readonly startupRepository: Repository<Startup>
	) {}

	async create(startup: Startup): Promise<Startup> {
		return this.startupRepository.save(startup);
	}

	async findAll(): Promise<Startup[]> {
		return this.startupRepository.find();
	}

	async findOneById(id: number): Promise<Startup | null> {
		return this.startupRepository.findOneBy({ id });
	}

	async update(id: number, startupData: Partial<Startup>): Promise<Startup> {
		const existingStartup = await this.startupRepository.findOneBy({ id });

		if (!existingStartup) {
			throw new NotFoundException("Startup not found");
		}
		return this.startupRepository.save({ ...existingStartup, ...startupData });
	}

	async remove(id: number): Promise<void> {
		await this.startupRepository.delete(id);
	}
}
