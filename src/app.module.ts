import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { JwtModule, JwtService } from "@nestjs/jwt";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DataSource } from "typeorm";

import { AuthGuard } from "./auth/auth.guard";
import { jwtConstants } from "./auth/constants";
import { AuthController } from "./controller/auth.controller";
import { BookmarkController } from "./controller/bookmark.controller";
import { LikeController } from "./controller/like.controller";
import { StartupController } from "./controller/startup.controller";
import { ViewController } from "./controller/view.controller";
import { Bookmark } from "./model/bookmark.model";
import { Like } from "./model/like.model";
import { Startup } from "./model/startup.model";
import { User } from "./model/user.model";
import { View } from "./model/view.model";
import { AuthService } from "./service/auth.service";
import { BookmarkService } from "./service/bookmark.service";
import { LikeService } from "./service/like.service";
import { StartupService } from "./service/startup.service";
import { UserService } from "./service/user.service";
import { ViewService } from "./service/view.service";
import { AuditTrail } from "./model/audit.model";
import { ApiLog } from "./model/apilog.model";
import { Metric } from "./model/metric.model";
import { Report } from "./model/report.model";

@Module({
	imports: [
		ConfigModule.forRoot(),
		TypeOrmModule.forRoot({
			type: "postgres",
			url: process.env.DATABASE_URL,
			synchronize: process.env.NODE_ENV !== "production",
			entities: [User, Startup, Bookmark, Like, View, AuditTrail, ApiLog, Metric, Report],
		}),
		TypeOrmModule.forFeature([User, Startup, Bookmark, Like, View, AuditTrail, ApiLog, Metric, Report]),
		JwtModule.register({
			global: true,
			secret: jwtConstants.secret,
			signOptions: { expiresIn: "60s" },
		}),
	],
	controllers: [AuthController, StartupController, BookmarkController, LikeController, ViewController],
	providers: [
		AuthService,
		UserService,
		StartupService,
		BookmarkService,
		LikeService,
		ViewService,
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
