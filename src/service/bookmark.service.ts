import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Bookmark } from "src/model/bookmark.model";
import { Repository } from "typeorm";

@Injectable()
export class BookmarkService {
	constructor(
		@InjectRepository(Bookmark)
		private readonly bookmarkRepository: Repository<Bookmark>
	) {}

	async create(bookmark: Bookmark): Promise<Bookmark> {
		return this.bookmarkRepository.save(bookmark);
	}

	async findAll(): Promise<Bookmark[]> {
		return this.bookmarkRepository.find();
	}

	async findOneByUserIdAndStartupId(userId: number, startupId: number): Promise<Bookmark | null> {
		return this.bookmarkRepository.findOne({
			where: { user: { id: userId }, startup: { id: startupId } },
		});
	}

	async remove(userId: number, startupId: number): Promise<void> {
		await this.bookmarkRepository.delete({ user: { id: userId }, startup: { id: startupId } });
	}
}
