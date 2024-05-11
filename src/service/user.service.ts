import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/model/user.model";
import { Repository } from "typeorm";

@Injectable()
export class UserService {
	constructor(
		@InjectRepository(User)
		private readonly userRepository: Repository<User>
	) {}

	async create(email: string, hashedPassword: string): Promise<User> {
		// TODO: more fields, proper constructor & getters/setters
		const user = new User();
		user.email = email;
		user.hashedPassword = hashedPassword;
		return this.userRepository.save(user);
	}

	async findAll(): Promise<User[]> {
		return this.userRepository.find();
	}

	async findOneById(id: number): Promise<User | null> {
		return this.userRepository.findOneBy({ id });
	}

	async findOne(email: string): Promise<User | null> {
		return this.userRepository.findOneBy({ email });
	}

	async remove(id: number): Promise<void> {
		await this.userRepository.delete(id);
	}
}
