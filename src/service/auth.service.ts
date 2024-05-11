import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import argon2 from "argon2";
import { UserService } from "./user.service";

@Injectable()
export class AuthService {
	constructor(
		private userService: UserService,
		private jwtService: JwtService
	) {}

	async register(
		email: string,
		pass: string,
		firstName: string,
		lastName: string,
		location: string
	): Promise<{ access_token: string }> {
		// TODO: more fields & validation
		const hashedPassword = await argon2.hash(pass);
		const user = await this.userService.create(
			email,
			hashedPassword,
			firstName,
			lastName,
			location
		);
		const payload = { id: user.id, email: user.email };
		return {
			access_token: await this.jwtService.signAsync(payload),
		};
	}

	async login(email: string, pass: string): Promise<{ access_token: string }> {
		const user = await this.userService.findOne(email);
		if (!(await argon2.verify(user?.hashedPassword, pass))) {
			// incorrect password
			throw new UnauthorizedException();
		}
		const payload = { sub: user.id, email: user.email };
		return {
			access_token: await this.jwtService.signAsync(payload),
		};
	}
}
