import { Controller, Get, HttpCode, HttpStatus } from "@nestjs/common";
import { UserService } from "src/service/user.service";

@Controller("/users")
export class UserController {
	constructor(private readonly userService: UserService) {}

	@HttpCode(HttpStatus.OK)
	@Get("/")
	getAll() {
		return this.userService.findAll();
	}
}
