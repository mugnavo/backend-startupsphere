import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { JwtModule, JwtService } from "@nestjs/jwt";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DataSource } from "typeorm";
import { AuthGuard } from "./auth/auth.guard";
import { jwtConstants } from "./auth/constants";
import { AuthController } from "./controller/auth.controller";
import { BookmarkController } from "./controller/bookmark.controller";
import { EntityManageController } from "./controller/entitymanage.controller";
import { InvestorController } from "./controller/investor.controller";
import { LikeController } from "./controller/like.controller";
import { StartupController } from "./controller/startup.controller";
import { ViewController } from "./controller/view.controller";
import { ApiLog } from "./model/apilog.model";
import { AuditTrail } from "./model/audit.model";
import { Bookmark } from "./model/bookmark.model";
import { EntityManage } from "./model/entitymanage.model";
import { Investor } from "./model/investor.model";
import { Like } from "./model/like.model";
import { Metric } from "./model/metric.model";
import { Report } from "./model/report.model";
import { Startup } from "./model/startup.model";
import { User } from "./model/user.model";
import { View } from "./model/view.model";
import { AuthService } from "./service/auth.service";
import { BookmarkService } from "./service/bookmark.service";
import { EntityManageService } from "./service/entitymanage.service";
import { InvestorService } from "./service/investor.service";
import { LikeService } from "./service/like.service";
import { StartupService } from "./service/startup.service";
import { UserService } from "./service/user.service";
import { ViewService } from "./service/view.service";
import { ReportController } from "./controller/report.controller";
import { ReportService } from "./service/report.service";

@Module({
	imports: [
		ConfigModule.forRoot(),
		TypeOrmModule.forRoot({
			type: "postgres",
			url: process.env.DATABASE_URL,
			synchronize: process.env.NODE_ENV !== "production",
			entities: [User, Startup, Bookmark, Like, View, AuditTrail, ApiLog, Metric, Report, Investor, EntityManage],
		}),
		TypeOrmModule.forFeature([
			User,
			Startup,
			Bookmark,
			Like,
			View,
			AuditTrail,
			ApiLog,
			Metric,
			Report,
			Investor,
			EntityManage,
		]),
		JwtModule.register({
			global: true,
			secret: jwtConstants.secret,
			signOptions: { expiresIn: "60s" },
		}),
	],
	controllers: [
		AuthController,
		StartupController,
		BookmarkController,
		LikeController,
		ViewController,
		InvestorController,
		ReportController,
		
	],
	providers: [
		AuthService,
		UserService,
		StartupService,
		BookmarkService,
		LikeService,
		InvestorService,
		ViewService,
		ReportService,
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
