import { Body, Controller, Get, HttpCode, HttpStatus, Post } from "@nestjs/common";
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

	@HttpCode(HttpStatus.CREATED)
	@Post("/")
	create(@Body() startup: Startup) {
		return this.startupService.create(startup);
	}
}
