import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post } from "@nestjs/common";
import { Public } from "src/auth/constants";
import { CreateLikeRequest } from "src/dto/startup.dto";
import { LikeService } from "src/service/like.service";

@Controller("/likes")
export class LikeController {
	constructor(private readonly likeService: LikeService) {}

	@HttpCode(HttpStatus.CREATED)
	@Post("/")
	create(@Body() like: CreateLikeRequest) {
		return this.likeService.create(like);
	}

	@HttpCode(HttpStatus.OK)
	@Delete("/:userId/:startupId")
	remove(@Param("userId") userId: number, @Param("startupId") startupId: number) {
		return this.likeService.remove(userId, startupId);
	}

	@Public()
	@HttpCode(HttpStatus.OK)
	@Get("/:startupId")
	findAllByStartupId(@Param("startupId") startupId: number) {
		return this.likeService.findAllByStartupId(startupId);
	}

	@HttpCode(HttpStatus.OK)
	@Get("/:userId/:startupId")
	findOneByUserIdAndStartupId(@Param("userId") userId: number, @Param("startupId") startupId: number) {
		return this.likeService.findOneByUserIdAndStartupId(userId, startupId);
	}
}
