import { Injectable } from "@nestjs/common";
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

	async findOneBy(id: number): Promise<Startup | null> {
		return this.startupRepository.findOneBy({ id });
	}

	async remove(id: number): Promise<void> {
		await this.startupRepository.delete(id);
	}
}
