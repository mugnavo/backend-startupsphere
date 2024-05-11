import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { View } from "src/model/view.model";
import { Repository } from "typeorm";

@Injectable()
export class ViewService {
	constructor(
		@InjectRepository(View)
		private readonly viewRepository: Repository<View>
	) {}

	async create(view: View): Promise<View> {
		return this.viewRepository.save(view);
	}

	async findAllByStartupId(startupId: number): Promise<View[]> {
		return this.viewRepository.find({ where: { startup: { id: startupId } } });
	}
}
