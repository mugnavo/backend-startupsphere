import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Like } from "src/model/like.model";
import { Repository } from "typeorm";
import { StartupService } from "./startup.service";

@Injectable()
export class LikeService {
	constructor(
		@InjectRepository(Like)
		private readonly likeRepository: Repository<Like>,

		private readonly startupService: StartupService
	) {}

	async create(like: Like): Promise<Like> {
		await this.startupService.incrementLike(like.startup.id);
		return this.likeRepository.save(like);
	}

	async remove(userId: number, startupId: number): Promise<void> {
		await this.startupService.decrementLike(startupId);
		await this.likeRepository.delete({ user: { id: userId }, startup: { id: startupId } });
	}
	//checks if a user has liked a startup by searching for an existing like entity with the given user and startup IDs.
	async findOneByUserIdAndStartupId(userId: number, startupId: number): Promise<Like | null> {
		return this.likeRepository.findOne({
			where: { user: { id: userId }, startup: { id: startupId } },
		});
	}
}
