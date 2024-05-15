import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put } from "@nestjs/common";
import { Public } from "src/auth/constants";
import { StartupRequest } from "src/dto/startup.dto";
import { StartupService } from "src/service/startup.service";

@Controller("/startups")
export class StartupController {
	constructor(private readonly startupService: StartupService) {}

	@Public()
	@HttpCode(HttpStatus.OK)
	@Get("/")
	getAll() {
		return this.startupService.findAll();
	}

	@Public()
	@HttpCode(HttpStatus.OK)
	@Get("/:startupId")
	getOneById(@Param("startupId") startupId: number) {
		return this.startupService.findOneById(startupId);
	}

	@HttpCode(HttpStatus.CREATED)
	@Post("/")
	create(@Body() startup: StartupRequest) {
		return this.startupService.create(startup);
	}

	@HttpCode(HttpStatus.OK)
	@Put("/:startupId")
	update(@Param("startupId") startupId: number, @Body() startup: StartupRequest) {
		return this.startupService.update(startupId, startup);
	}

	@HttpCode(HttpStatus.GONE)
	@Delete("/:startupId")
	delete(@Param("startupId") startupId: number) {
		return this.startupService.remove(startupId);
	}
}
