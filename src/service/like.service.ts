import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Like } from "src/model/like.model";
import { Repository } from "typeorm";

@Injectable()
export class LikeService {
	constructor(
		@InjectRepository(Like)
		private readonly likeRepository: Repository<Like>
	) {}

	async create(like: Like): Promise<Like> {
		return this.likeRepository.save(like);
	}

	async remove(userId: number, startupId: number): Promise<void> {
		const likeToRemove = await this.likeRepository.findOne({
			where: { user: { id: userId }, startup: { id: startupId } },
		});
		if (likeToRemove) {
			await this.likeRepository.remove(likeToRemove);
		}
	}
	//checks if a user has liked a startup by searching for an existing like entity with the given user and startup IDs.
	async findOneByUserIdAndStartupId(userId: number, startupId: number): Promise<Like | null> {
		return this.likeRepository.findOne({
			where: { user: { id: userId }, startup: { id: startupId } },
		});
	}
}
