import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post } from "@nestjs/common";
import { Bookmark } from "src/model/bookmark.model";
import { BookmarkService } from "src/service/bookmark.service";

@Controller("/bookmarks")
export class BookmarkController {
	constructor(private readonly bookmarkService: BookmarkService) {}

	@HttpCode(HttpStatus.OK)
	@Get("/")
	getAll() {
		return this.bookmarkService.findAll();
	}

	@HttpCode(HttpStatus.CREATED)
	@Post("/")
	create(@Body() bookmark: Bookmark) {
		return this.bookmarkService.create(bookmark);
	}

	@HttpCode(HttpStatus.OK)
	@Delete("/:userId/:startupId")
	remove(@Param("userId") userId: number, @Param("startupId") startupId: number) {
		return this.bookmarkService.remove(userId, startupId);
	}
}
