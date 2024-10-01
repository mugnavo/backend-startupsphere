import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateBookmarkRequest } from "src/dto/startup.dto";
import { Like } from "src/model/like.model";
import { Repository } from "typeorm";
import { InvestorService } from "./investor.service";
import { StartupService } from "./startup.service";

@Injectable()
export class LikeService {
	constructor(
		@InjectRepository(Like)
		private readonly likeRepository: Repository<Like>,

		private readonly startupService: StartupService,
		private readonly investorService: InvestorService
	) {}

	async findAll(): Promise<Like[]> {
		return this.likeRepository.find();
	}

	async create(like: CreateBookmarkRequest): Promise<void> {
		if (like.startupId) {
			await this.startupService.incrementLike(like.startupId);
			await this.likeRepository.insert({ startup: { id: like.startupId }, user: { id: like.userId } });
		} else if (like.investorId) {
			await this.investorService.incrementLike(like.investorId);
			await this.likeRepository.insert({ investor: { id: like.investorId }, user: { id: like.userId } });
		}
	}

	async startupRemove(userId: number, startupId: number): Promise<void> {
		await this.startupService.decrementLike(startupId);
		await this.likeRepository.delete({ user: { id: userId }, startup: { id: startupId } });
	}

	async investorRemove(userId: number, investorId: number): Promise<void> {
		await this.investorService.decrementLike(investorId);
		await this.likeRepository.delete({ user: { id: userId }, investor: { id: investorId } });
	}

	async findOneByUserIdAndStartupId(userId: number, startupId: number): Promise<Like | null> {
		return this.likeRepository.findOne({
			where: { user: { id: userId }, startup: { id: startupId } },
		});
	}

	async findOneByUserIdAndInvestorId(userId: number, investorId: number): Promise<Like | null> {
		return this.likeRepository.findOne({
			where: { user: { id: userId }, investor: { id: investorId } },
		});
	}

	async findAllByStartupId(startupId: number): Promise<Like[]> {
		return this.likeRepository.find({ where: { startup: { id: startupId } } });
	}

	async findAllByInvestorId(investorId: number): Promise<Like[]> {
		return this.likeRepository.find({ where: { investor: { id: investorId } } });
	}
}
