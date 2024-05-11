import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";

import { JwtService } from "@nestjs/jwt";
import { DataSource } from "typeorm";
import { AuthGuard } from "./auth/auth.guard";
import { AuthController } from "./controller/auth.controller";
import { StartupController } from "./controller/startup.controller";
import { Startup } from "./model/startup.model";
import { User } from "./model/user.model";
import { AuthService } from "./service/auth.service";
import { StartupService } from "./service/startup.service";
import { UserService } from "./service/user.service";

@Module({
	imports: [
		ConfigModule.forRoot(),
		TypeOrmModule.forRoot({
			type: "postgres",
			url: process.env.DATABASE_URL,
			synchronize: process.env.NODE_ENV !== "production",
			entities: [User, Startup],
		}),
		TypeOrmModule.forFeature([User, Startup]),
	],
	controllers: [AuthController, StartupController],
	providers: [
		AuthService,
		UserService,
		StartupService,
		JwtService,
		{
			provide: "APP_GUARD",
			useClass: AuthGuard,
		},
	],
})
export class AppModule {
	constructor(private dataSource: DataSource) {}
}
