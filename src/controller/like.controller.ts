import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post } from "@nestjs/common";
import { Public } from "src/auth/constants";
import { CreateLikeRequest } from "src/dto/startup.dto";
import { LikeService } from "src/service/like.service";

@Controller("/likes")
export class LikeController {
	constructor(private readonly likeService: LikeService) {}

	@HttpCode(HttpStatus.OK)
	@Get("/")
	getAll() {
		return this.likeService.findAll();
	}

	@HttpCode(HttpStatus.CREATED)
	@Post("/")
	create(@Body() like: CreateLikeRequest) {
		return this.likeService.create(like);
	}

	@HttpCode(HttpStatus.OK)
	@Delete("/:userId/startup/:startupId")
	startupRemove(@Param("userId") userId: number, @Param("startupId") startupId: number) {
		return this.likeService.startupRemove(userId, startupId);
	}

	@HttpCode(HttpStatus.OK)
	@Delete("/:userId/investor/:investorId")
	investorRemove(@Param("userId") userId: number, @Param("investorId") investorId: number) {
		return this.likeService.investorRemove(userId, investorId);
	}

	@Public()
	@HttpCode(HttpStatus.OK)
	@Get("/:startupId")
	findAllByStartupId(@Param("startupId") startupId: number) {
		return this.likeService.findAllByStartupId(startupId);
	}

	@Public()
	@HttpCode(HttpStatus.OK)
	@Get("/:investorId")
	findAllByInvestorId(@Param("investorId") investorId: number) {
		return this.likeService.findAllByInvestorId(investorId);
	}

	@HttpCode(HttpStatus.OK)
	@Get("/:userId/startup/:startupId")
	findOneByUserIdAndStartupId(@Param("userId") userId: number, @Param("startupId") startupId: number) {
		return this.likeService.findOneByUserIdAndStartupId(userId, startupId);
	}

	@HttpCode(HttpStatus.OK)
	@Get("/:userId/investor/:investorId")
	findOneByUserIdAndInvestorId(@Param("userId") userId: number, @Param("investorId") investorId: number) {
		return this.likeService.findOneByUserIdAndInvestorId(userId, investorId);
	}
}
