import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post } from "@nestjs/common";
import { Public } from "src/auth/constants";
import { CreateBookmarkRequest } from "src/dto/startup.dto";
import { BookmarkService } from "src/service/bookmark.service";

@Controller("/bookmarks")
export class BookmarkController {
	constructor(private readonly bookmarkService: BookmarkService) {}

	@HttpCode(HttpStatus.OK)
	@Get("/")
	getAll() {
		return this.bookmarkService.findAll();
	}

	@HttpCode(HttpStatus.OK)
	@Get("/:userId/:startupId")
	findOneByUserIdAndStartupId(@Param("userId") userId: number, @Param("startupId") startupId: number) {
		return this.bookmarkService.findOneByUserIdAndStartupId(userId, startupId);
	}

	@HttpCode(HttpStatus.OK)
	@Get("/:userId")
	findAllByUserId(@Param("userId") userId: number) {
		return this.bookmarkService.findAllByUserId(userId);
	}

	@Public()
	@HttpCode(HttpStatus.OK)
	@Get("/:startupId")
	findAllByStartupId(@Param("startupId") startupId: number) {
		return this.bookmarkService.findAllByStartupId(startupId);
	}

	@HttpCode(HttpStatus.CREATED)
	@Post("/")
	create(@Body() bookmark: CreateBookmarkRequest) {
		return this.bookmarkService.create(bookmark);
	}

	@HttpCode(HttpStatus.OK)
	@Delete("/:userId/:startupId")
	remove(@Param("userId") userId: number, @Param("startupId") startupId: number) {
		return this.bookmarkService.remove(userId, startupId);
	}
}
