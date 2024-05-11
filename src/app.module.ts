import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";

import { JwtService } from "@nestjs/jwt";
import { DataSource } from "typeorm";
import { AuthGuard } from "./auth/auth.guard";
import { AuthController } from "./controller/auth.controller";
import { StartupController } from "./controller/startup.controller";
import { BookmarkController } from "./controller/bookmark.controller";
import { LikeController } from "./controller/like.controller";
import { ViewController } from "./controller/view.controller";
import { Startup } from "./model/startup.model";
import { User } from "./model/user.model";
import { Bookmark } from "./model/bookmark.model";
import { Like } from "./model/like.model";
import { View } from "./model/view.model";
import { AuthService } from "./service/auth.service";
import { StartupService } from "./service/startup.service";
import { UserService } from "./service/user.service";
import { BookmarkService } from "./service/bookmark.service";
import { LikeService } from "./service/like.service";
import { ViewService } from "./service/view.service";
@Module({
	imports: [
		ConfigModule.forRoot(),
		TypeOrmModule.forRoot({
			type: "postgres",
			url: process.env.DATABASE_URL,
			synchronize: process.env.NODE_ENV !== "production",
			entities: [User, Startup, Bookmark, Like, View],
		}),
		TypeOrmModule.forFeature([User, Startup, Bookmark, Like, View]),
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
