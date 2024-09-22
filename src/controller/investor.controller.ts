import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put } from "@nestjs/common";
import { Public } from "src/auth/constants";
import { InvestorRequest } from "src/dto/investor.dto";
import { InvestorService } from "src/service/investor.service";

@Controller("/investors")
export class InvestorController {
	constructor(private readonly investorService: InvestorService) {}

	@Public()
	@HttpCode(HttpStatus.OK)
	@Get("/")
	getAll() {
		return this.investorService.findAll();
	}

	@Public()
	@HttpCode(HttpStatus.OK)
	@Get("/:investorId")
	getOneById(@Param("investorId") investorId: number) {
		return this.investorService.findOneById(investorId);
	}

	@HttpCode(HttpStatus.CREATED)
	@Post("/")
	create(@Body() investor: InvestorRequest) {
		return this.investorService.create(investor);
	}

	@HttpCode(HttpStatus.OK)
	@Put("/:investorId")
	update(@Param("investorId") investorId: number, @Body() investor: InvestorRequest) {
		return this.investorService.update(investorId, investor);
	}

	@HttpCode(HttpStatus.GONE)
	@Delete("/:investorId")
	delete(@Param("investorId") investorId: number) {
		return this.investorService.remove(investorId);
	}
}
