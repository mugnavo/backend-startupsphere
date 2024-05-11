import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put } from "@nestjs/common";
import { Startup } from "src/model/startup.model";
import { StartupService } from "src/service/startup.service";

@Controller("/startups")
export class StartupController {
	constructor(private readonly startupService: StartupService) {}

	@HttpCode(HttpStatus.OK)
	@Get("/")
	getAll() {
		return this.startupService.findAll();
	}

	@HttpCode(HttpStatus.OK)
	@Get("/:startupId")
	getOneById(@Param() startupId: number) {
		return this.startupService.findOneById(startupId);
	}

	@HttpCode(HttpStatus.CREATED)
	@Post("/")
	create(@Body() startup: Startup) {
		return this.startupService.create(startup);
	}

	@HttpCode(HttpStatus.OK)
	@Put("/:startupId")
	update(@Param() startupId: number, @Body() startup: Startup) {
		return this.startupService.update(startupId, startup);
	}

	@HttpCode(HttpStatus.GONE)
	@Delete("/:startupId")
	delete(@Param() startupId: number) {
		return this.startupService.remove(startupId);
	}
}
