import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateBookmarkRequest } from "src/dto/startup.dto";
import { Bookmark } from "src/model/bookmark.model";
import { Repository } from "typeorm";
import { InvestorService } from "./investor.service";
import { StartupService } from "./startup.service";

@Injectable()
export class BookmarkService {
	constructor(
		@InjectRepository(Bookmark)
		private readonly bookmarkRepository: Repository<Bookmark>,

		private readonly startupService: StartupService,
		private readonly investorService: InvestorService
	) {}

	async create(bookmark: CreateBookmarkRequest): Promise<void> {
		if (bookmark.startupId) {
			await this.startupService.incrementBookmark(bookmark.startupId);
			await this.bookmarkRepository.insert({ startup: { id: bookmark.startupId }, user: { id: bookmark.userId } });
		} else if (bookmark.investorId) {
			await this.investorService.incrementBookmark(bookmark.investorId);
			await this.bookmarkRepository.insert({ investor: { id: bookmark.investorId }, user: { id: bookmark.userId } });
		}
	}

	async findAll(): Promise<Bookmark[]> {
		return this.bookmarkRepository.find();
	}

	async findAllByUserId(userId: number): Promise<Bookmark[]> {
		return this.bookmarkRepository.find({ where: { user: { id: userId } }, relations: ["user", "startup"] });
	}

	async findOneByUserIdAndStartupId(userId: number, startupId: number): Promise<Bookmark | null> {
		return this.bookmarkRepository.findOne({
			where: { user: { id: userId }, startup: { id: startupId } },
		});
	}

	async findOneByUserIdAndInvestorId(userId: number, investorId: number): Promise<Bookmark | null> {
		return this.bookmarkRepository.findOne({
			where: { user: { id: userId }, investor: { id: investorId } },
		});
	}

	async startupRemove(userId: number, startupId: number): Promise<void> {
		await this.startupService.decrementBookmark(startupId);
		await this.bookmarkRepository.delete({ user: { id: userId }, startup: { id: startupId } });
	}

	async investorRemove(userId: number, investorId: number): Promise<void> {
		await this.investorService.decrementBookmark(investorId);
		await this.bookmarkRepository.delete({ user: { id: userId }, investor: { id: investorId } });
	}

	async findAllByStartupId(startupId: number): Promise<Bookmark[]> {
		return this.bookmarkRepository.find({ where: { startup: { id: startupId } } });
	}

	async findAllByInvestorId(investorId: number): Promise<Bookmark[]> {
		return this.bookmarkRepository.find({ where: { investor: { id: investorId } } });
	}
}
