import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { StartupRequest } from "src/dto/startup.dto";
import { Startup } from "src/model/startup.model";
import { Repository } from "typeorm";

@Injectable()
export class StartupService {
	constructor(
		@InjectRepository(Startup)
		private readonly startupRepository: Repository<Startup>
	) {}

	async create(startup: StartupRequest): Promise<Startup> {
		return this.startupRepository.save(startup);
	}

	async findAll(): Promise<Startup[]> {
		return this.startupRepository.find({ relations: ["managerId"] });
	}

	async findOneById(id: number): Promise<Startup | null> {
		return this.startupRepository.findOne({
			where: { id },
			relations: ["managerId"],
		});
	}

	async findAllByManagerId(managerId: number): Promise<Startup[] | null> {
		return this.startupRepository.find({ where: { managerId: managerId }, relations: ["managerId"] });
	}

	async update(id: number, startupData: Partial<StartupRequest>): Promise<Startup> {
		const existingStartup = await this.startupRepository.findOneBy({ id });

		if (!existingStartup) {
			throw new NotFoundException("Startup not found");
		}
		return this.startupRepository.save({ ...existingStartup, ...startupData });
	}

	async incrementLike(id: number): Promise<void> {
		await this.startupRepository.increment({ id }, "likes", 1);
	}

	async decrementLike(id: number): Promise<void> {
		await this.startupRepository.decrement({ id }, "likes", 1);
	}

	async incrementBookmark(id: number): Promise<void> {
		await this.startupRepository.increment({ id }, "bookmarks", 1);
	}

	async decrementBookmark(id: number): Promise<void> {
		await this.startupRepository.decrement({ id }, "bookmarks", 1);
	}

	async incrementView(id: number): Promise<void> {
		await this.startupRepository.increment({ id }, "views", 1);
	}

	async remove(id: number): Promise<void> {
		await this.startupRepository.delete(id);
	}
}
