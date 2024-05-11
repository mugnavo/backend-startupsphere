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

	async signIn(username: string, pass: string): Promise<{ access_token: string }> {
		const user = await this.userService.findOne(username);
		if (!(await argon2.verify(user?.hashedPassword, pass))) {
			// incorrect password
			throw new UnauthorizedException();
		}
		const payload = { sub: user.id, username: user.email };
		return {
			access_token: await this.jwtService.signAsync(payload),
		};
	}
}
