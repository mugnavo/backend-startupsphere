import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ReportRequest } from "src/dto/report.dto";
import { Report } from "src/model/report.model";
import { Repository } from "typeorm";

@Injectable()
export class ReportService {
	constructor(
		@InjectRepository(Report)
		private readonly reportRepository: Repository<Report>
	) {}

	async create(report: ReportRequest): Promise<Report> {
		return this.reportRepository.save(report);
	}

	async update(id: number, reportData: Partial<ReportRequest>): Promise<Report> {
		const existingReport = await this.reportRepository.findOneBy({ id });

		if (!existingReport) {
			throw new NotFoundException("Report not found");
		}
		return this.reportRepository.save({ ...existingReport, ...reportData });
	}

	async findAll(): Promise<Report[]> {
		return this.reportRepository.find();
	}

	async findOneById(id: number): Promise<Report | null> {
		return this.reportRepository.findOneBy({ id });
	}

	async remove(id: number): Promise<void> {
		await this.reportRepository.delete(id);
	}
}
