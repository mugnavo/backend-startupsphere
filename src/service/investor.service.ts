import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { InvestorRequest } from "src/dto/investor.dto";
import { Investor } from "src/model/investor.model";
import { Repository } from "typeorm";

@Injectable()
export class InvestorService {
	constructor(
		@InjectRepository(Investor)
		private readonly investorRepository: Repository<Investor>
	) {}

	async create(investor: InvestorRequest): Promise<Investor> {
		return this.investorRepository.save(investor);
	}

	async findAll(): Promise<Investor[]> {
		return this.investorRepository.find();
	}

	async findOneById(id: number): Promise<Investor | null> {
		return this.investorRepository.findOneBy({ id });
	}

	async update(id: number, investorData: Partial<InvestorRequest>): Promise<Investor> {
		const existingInvestor = await this.investorRepository.findOneBy({ id });

		if (!existingInvestor) {
			throw new NotFoundException("Investor not found");
		}
		return this.investorRepository.save({ ...existingInvestor, ...investorData });
	}

	async remove(id: number): Promise<void> {
		await this.investorRepository.delete(id);
	}
}
