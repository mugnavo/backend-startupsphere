import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/model/user.model";
import { Repository } from "typeorm";

@Injectable()
export class UserService {
	constructor(
		@InjectRepository(User)
		private readonly userRepository: Repository<User>
	) {}

	async create(
		email: string,
		hashedPassword: string,
		firstName: string,
		lastName: string,
		location: string
	): Promise<User> {
		const user = new User(undefined, email, hashedPassword, "", firstName, lastName, location, false, undefined);
		return this.userRepository.save(user);
	}

	async update(id: number, userData: Partial<User>): Promise<User> {
		const existingUser = await this.userRepository.findOneBy({ id });

		if (!existingUser) {
			throw new NotFoundException("User not found");
		}
		return this.userRepository.save({ ...existingUser, ...userData });
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
