import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post } from "@nestjs/common";
import { LoginRequest, RegisterRequest } from "src/dto/auth.dto";
import { AuthService } from "../service/auth.service";
import { Public } from "./../auth/constants";

@Controller("/auth")
export class AuthController {
	constructor(private authService: AuthService) {}

	@Public()
	@HttpCode(HttpStatus.CREATED)
	@Post("/register")
	register(@Body() registerDto: RegisterRequest) {
		return this.authService.register(
			registerDto.email,
			registerDto.password,
			registerDto.firstName,
			registerDto.lastName,
			registerDto.role
		);
	}

	@Public()
	@HttpCode(HttpStatus.OK)
	@Post("/login")
	login(@Body() signInDto: LoginRequest) {
		return this.authService.login(signInDto.email, signInDto.password);
	}

	@HttpCode(HttpStatus.OK)
	@Get("/me/:id")
	me(@Param("id") id: number) {
		return this.authService.me(id);
	}
}
