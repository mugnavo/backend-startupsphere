import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post } from "@nestjs/common";
import { Public } from "src/auth/constants";
import { CreateViewRequest } from "src/dto/startup.dto";
import { ViewService } from "src/service/view.service";

@Controller("/views")
export class ViewController {
	constructor(private readonly viewService: ViewService) {}

	@Public()
	@HttpCode(HttpStatus.CREATED)
	@Post("/")
	create(@Body() view: CreateViewRequest) {
		return this.viewService.create(view);
	}

	@HttpCode(HttpStatus.OK)
	@Get("/:userId")
	findRecentsByUserId(@Param("userId") userId: number) {
		return this.viewService.findRecentsByUserId(userId);
	}

	@Public()
	@HttpCode(HttpStatus.OK)
	@Get("/startup/:startupId")
	findAllByStartupId(@Param("startupId") startupId: number) {
		return this.viewService.findAllByStartupId(startupId);
	}

	@Public()
	@HttpCode(HttpStatus.OK)
	@Get("/investor/:investorId")
	findAllByInvestorId(@Param("investorId") investorId: number) {
		return this.viewService.findAllByInvestorId(investorId);
	}

	@HttpCode(HttpStatus.OK)
	@Get("/")
	getAll() {
		return this.viewService.findAll();
	}
}
