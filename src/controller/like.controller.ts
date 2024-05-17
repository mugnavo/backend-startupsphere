import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post } from "@nestjs/common";
import { Like } from "src/model/like.model";
import { LikeService } from "src/service/like.service";

@Controller("/likes")
export class LikeController {
	constructor(private readonly likeService: LikeService) {}

	@HttpCode(HttpStatus.CREATED)
	@Post("/")
	create(@Body() like: Like) {
		return this.likeService.create(like);
	}

	@HttpCode(HttpStatus.OK)
	@Delete("/:userId/:startupId")
	remove(@Param("userId") userId: number, @Param("startupId") startupId: number) {
		return this.likeService.remove(userId, startupId);
	}

	@HttpCode(HttpStatus.OK)
	@Get("/:userId/:startupId")
	findOneByUserIdAndStartupId(@Param("userId") userId: number, @Param("startupId") startupId: number) {
		return this.likeService.findOneByUserIdAndStartupId(userId, startupId);
	}
}
