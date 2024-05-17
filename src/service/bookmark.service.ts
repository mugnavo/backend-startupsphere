import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateBookmarkRequest } from "src/dto/startup.dto";
import { Bookmark } from "src/model/bookmark.model";
import { Repository } from "typeorm";
import { StartupService } from "./startup.service";

@Injectable()
export class BookmarkService {
	constructor(
		@InjectRepository(Bookmark)
		private readonly bookmarkRepository: Repository<Bookmark>,

		private readonly startupService: StartupService
	) {}

	async create(bookmark: CreateBookmarkRequest): Promise<void> {
		await this.startupService.incrementBookmark(bookmark.startupId);
		await this.bookmarkRepository.insert({ startup: { id: bookmark.startupId }, user: { id: bookmark.userId } });
	}

	async findAll(): Promise<Bookmark[]> {
		return this.bookmarkRepository.find();
	}

	async findAllByUserId(userId: number): Promise<Bookmark[]> {
		return this.bookmarkRepository.find({ where: { user: { id: userId } } });
	}

	async findOneByUserIdAndStartupId(userId: number, startupId: number): Promise<Bookmark | null> {
		return this.bookmarkRepository.findOne({
			where: { user: { id: userId }, startup: { id: startupId } },
		});
	}

	async remove(userId: number, startupId: number): Promise<void> {
		await this.startupService.decrementBookmark(startupId);
		await this.bookmarkRepository.delete({ user: { id: userId }, startup: { id: startupId } });
	}

	async findAllByStartupId(startupId: number): Promise<Bookmark[]> {
		return this.bookmarkRepository.find({ where: { startup: { id: startupId } } });
	}
}
