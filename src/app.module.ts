import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";

import { AuthGuard } from "./auth/auth.guard";
import { AuthController } from "./controller/auth.controller";
import { StartupController } from "./controller/startup.controller";
import { Startup } from "./model/startup.model";
import { User } from "./model/user.model";

@Module({
	imports: [
		ConfigModule.forRoot(),
		TypeOrmModule.forRoot({
			type: "postgres",
			host: process.env.PGHOST,
			username: process.env.PGUSER,
			password: process.env.PGPASSWORD,
			database: process.env.PGDATABASE,
			synchronize: process.env.NODE_ENV !== "production",
			entities: [User, Startup],
		}),
	],
	controllers: [AuthController, StartupController],
	providers: [
		{
			provide: "APP_GUARD",
			useClass: AuthGuard,
		},
	],
})
export class AppModule {}
