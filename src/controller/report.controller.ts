import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put } from "@nestjs/common";
import { Public } from "src/auth/constants";
import { ReportRequest } from "src/dto/report.dto";
import { ReportService } from "src/service/report.service";

@Controller("/reports")
export class ReportController {
	constructor(private readonly reportService: ReportService) {}

	@Public()
	@HttpCode(HttpStatus.OK)
	@Get("/")
	getAll() {
		return this.reportService.findAll();
	}

	@Public()
	@HttpCode(HttpStatus.OK)
	@Get("/:reportId")
	getOneById(@Param("reportId") reportId: number) {
		return this.reportService.findOneById(reportId);
	}

	@HttpCode(HttpStatus.CREATED)
	@Post("/")
	create(@Body() report: ReportRequest) {
		return this.reportService.create(report);
	}

	@HttpCode(HttpStatus.OK)
	@Put("/:reportId")
	update(@Param("reportId") reportId: number, @Body() report: ReportRequest) {
		return this.reportService.update(reportId, report);
	}

	@HttpCode(HttpStatus.GONE)
	@Delete("/:reportId")
	delete(@Param("reportId") reportId: number) {
		return this.reportService.remove(reportId);
	}
}
