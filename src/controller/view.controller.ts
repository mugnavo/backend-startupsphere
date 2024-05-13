import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post } from "@nestjs/common";
import { Public } from "src/auth/constants";
import { View } from "src/model/view.model";
import { ViewService } from "src/service/view.service";

@Controller("/views")
export class ViewController {
	constructor(private readonly viewService: ViewService) {}

	@Public()
	@HttpCode(HttpStatus.CREATED)
	@Post("/")
	create(@Body() view: View) {
		return this.viewService.create(view);
	}

	@HttpCode(HttpStatus.OK)
	@Get("/:startupId")
	findAllByStartupId(@Param("startupId") startupId: number) {
		return this.viewService.findAllByStartupId(startupId);
	}

	@HttpCode(HttpStatus.OK)
	@Get("/")
	getAll() {
		return this.viewService.findAll();
	}
}
