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

	@HttpCode(HttpStatus.CREATED)
	@Post("/")
	create(@Body() bookmark: CreateBookmarkRequest) {
		return this.bookmarkService.create(bookmark);
	}

	@HttpCode(HttpStatus.OK)
	@Get("/:userId")
	findAllByUserId(@Param("userId") userId: number) {
		return this.bookmarkService.findAllByUserId(userId);
	}

	@HttpCode(HttpStatus.OK)
	@Delete("/:userId/startup/:startupId")
	startupRemove(@Param("userId") userId: number, @Param("startupId") startupId: number) {
		return this.bookmarkService.startupRemove(userId, startupId);
	}

	@HttpCode(HttpStatus.OK)
	@Delete("/:userId/investor/:investorId")
	investorRemove(@Param("userId") userId: number, @Param("investorId") investorId: number) {
		return this.bookmarkService.investorRemove(userId, investorId);
	}

	@Public()
	@HttpCode(HttpStatus.OK)
	@Get("/:startupId")
	findAllByStartupId(@Param("startupId") startupId: number) {
		return this.bookmarkService.findAllByStartupId(startupId);
	}

	@Public()
	@HttpCode(HttpStatus.OK)
	@Get("/:investorId")
	findAllByInvestorId(@Param("investorId") investorId: number) {
		return this.bookmarkService.findAllByInvestorId(investorId);
	}

	@HttpCode(HttpStatus.OK)
	@Get("/:userId/startup/:startupId")
	findOneByUserIdAndStartupId(@Param("userId") userId: number, @Param("startupId") startupId: number) {
		return this.bookmarkService.findOneByUserIdAndStartupId(userId, startupId);
	}

	@HttpCode(HttpStatus.OK)
	@Get("/:userId/investor/:investorId")
	findOneByUserIdAndInvestorId(@Param("userId") userId: number, @Param("investorId") investorId: number) {
		return this.bookmarkService.findOneByUserIdAndInvestorId(userId, investorId);
	}
}
