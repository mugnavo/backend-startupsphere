import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import argon2 from "argon2";
import { jwtConstants } from "src/auth/constants";
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
		const user = await this.userService.create(email, hashedPassword, firstName, lastName, location);
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const { hashedPassword: _, ...payload } = user;
		return {
			access_token: await this.jwtService.signAsync(payload, { secret: jwtConstants.secret }),
		};
	}

	async login(email: string, pass: string): Promise<{ access_token?: string; error?: string }> {
		const user = await this.userService.findOne(email);
		if (!user) {
			return {
				error: "Invalid email or password",
			};
		}
		if (!(await argon2.verify(user?.hashedPassword, pass))) {
			return {
				error: "Invalid email or password",
			};
		}
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const { hashedPassword: _, ...payload } = user;
		return {
			access_token: await this.jwtService.signAsync(payload, { secret: jwtConstants.secret }),
		};
	}
}
