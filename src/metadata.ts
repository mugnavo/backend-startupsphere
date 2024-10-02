/* eslint-disable */
export default async () => {
    const t = {
        ["./model/user.model"]: await import("./model/user.model"),
        ["./model/startup.model"]: await import("./model/startup.model"),
        ["./model/investor.model"]: await import("./model/investor.model"),
        ["./dto/auth.dto"]: await import("./dto/auth.dto"),
        ["./model/bookmark.model"]: await import("./model/bookmark.model"),
        ["./model/like.model"]: await import("./model/like.model"),
        ["./model/report.model"]: await import("./model/report.model"),
        ["./model/view.model"]: await import("./model/view.model")
    };
    return { "@nestjs/swagger": { "models": [[import("./dto/auth.dto"), { "RegisterRequest": { email: { required: true, type: () => String }, password: { required: true, type: () => String }, firstName: { required: true, type: () => String }, lastName: { required: true, type: () => String }, role: { required: true, type: () => String } }, "LoginRequest": { email: { required: true, type: () => String }, password: { required: true, type: () => String } }, "AuthResponse": { access_token: { required: false, type: () => String }, error: { required: false, type: () => String } } }], [import("./model/user.model"), { "User": { id: { required: true, type: () => Number }, email: { required: true, type: () => String }, avatarUrl: { required: true, type: () => String }, firstName: { required: true, type: () => String }, lastName: { required: true, type: () => String }, moderator: { required: true, type: () => Boolean }, role: { required: true, type: () => String }, createdAt: { required: true, type: () => Date } } }], [import("./dto/startup.dto"), { "StartupRequest": { name: { required: true, type: () => String }, description: { required: true, type: () => String }, locationLat: { required: true, type: () => Number }, locationLng: { required: true, type: () => Number }, locationName: { required: true, type: () => String }, founderName: { required: true, type: () => String }, websiteUrl: { required: true, type: () => String }, logoUrl: { required: true, type: () => String }, categories: { required: true, type: () => [String] }, foundedDate: { required: true, type: () => Date }, contactInfo: { required: true, type: () => String }, managerId: { required: false, type: () => Number }, capital: { required: true, type: () => Number }, fundingStage: { required: true, type: () => String }, teamSize: { required: true, type: () => Number } }, "CreateViewRequest": { startupId: { required: false, type: () => Number }, investorId: { required: false, type: () => Number }, userId: { required: true, type: () => Number, nullable: true } }, "CreateLikeRequest": { startupId: { required: false, type: () => Number }, investorId: { required: false, type: () => Number }, userId: { required: true, type: () => Number } }, "CreateBookmarkRequest": { startupId: { required: false, type: () => Number }, investorId: { required: false, type: () => Number }, userId: { required: true, type: () => Number } } }], [import("./model/investor.model"), { "Investor": { id: { required: true, type: () => Number }, name: { required: true, type: () => String }, description: { required: true, type: () => String }, type: { required: true, type: () => String }, investment_focus: { required: true, type: () => String }, total_funds: { required: true, type: () => Number }, managerId: { required: false, type: () => Number }, locationLat: { required: true, type: () => Number }, locationLng: { required: true, type: () => Number }, locationName: { required: true, type: () => String }, websiteUrl: { required: true, type: () => String }, logoUrl: { required: true, type: () => String }, contactInfo: { required: true, type: () => String }, likes: { required: true, type: () => Number }, bookmarks: { required: true, type: () => Number }, views: { required: true, type: () => Number } } }], [import("./model/startup.model"), { "Startup": { id: { required: true, type: () => Number }, name: { required: true, type: () => String }, description: { required: true, type: () => String }, locationLat: { required: true, type: () => Number }, locationLng: { required: true, type: () => Number }, locationName: { required: true, type: () => String }, capital: { required: true, type: () => Number }, fundingStage: { required: true, type: () => String }, teamSize: { required: true, type: () => Number }, managerId: { required: false, type: () => Number }, founderName: { required: true, type: () => String }, websiteUrl: { required: true, type: () => String }, logoUrl: { required: true, type: () => String }, categories: { required: true, type: () => [String] }, foundedDate: { required: true, type: () => Date }, contactInfo: { required: true, type: () => String }, likes: { required: true, type: () => Number }, bookmarks: { required: true, type: () => Number }, views: { required: true, type: () => Number } } }], [import("./model/bookmark.model"), { "Bookmark": { id: { required: true, type: () => Number }, user: { required: true, type: () => t["./model/user.model"].User }, startup: { required: false, type: () => t["./model/startup.model"].Startup }, investor: { required: false, type: () => t["./model/investor.model"].Investor }, timestamp: { required: true, type: () => Date } } }], [import("./dto/investor.dto"), { "InvestorRequest": { name: { required: true, type: () => String }, description: { required: true, type: () => String }, type: { required: true, type: () => String }, investment_focus: { required: true, type: () => String }, total_funds: { required: true, type: () => Number }, locationLat: { required: true, type: () => Number }, locationLng: { required: true, type: () => Number }, locationName: { required: true, type: () => String }, websiteUrl: { required: true, type: () => String }, logoUrl: { required: true, type: () => String }, contactInfo: { required: true, type: () => String }, managerId: { required: false, type: () => Number } } }], [import("./model/like.model"), { "Like": { id: { required: true, type: () => Number }, user: { required: true, type: () => t["./model/user.model"].User }, startup: { required: false, type: () => t["./model/startup.model"].Startup }, investor: { required: false, type: () => t["./model/investor.model"].Investor }, timestamp: { required: true, type: () => Date } } }], [import("./dto/report.dto"), { "ReportRequest": { generated_by: { required: true, type: () => Number }, name: { required: true, type: () => String }, file_type: { required: true, type: () => String }, url: { required: true, type: () => String } } }], [import("./model/report.model"), { "Report": { id: { required: true, type: () => Number }, generated_by: { required: true, type: () => Number }, name: { required: true, type: () => String }, file_type: { required: true, type: () => String }, url: { required: true, type: () => String }, timestamp: { required: true, type: () => Date } } }], [import("./model/view.model"), { "View": { id: { required: true, type: () => Number }, user_id: { required: true, type: () => Number, nullable: true }, startup: { required: false, type: () => t["./model/startup.model"].Startup }, investor: { required: false, type: () => t["./model/investor.model"].Investor }, timestamp: { required: true, type: () => Date } } }], [import("./model/apilog.model"), { "ApiLog": { id: { required: true, type: () => Number }, endpoint: { required: true, type: () => String }, request_method: { required: true, type: () => String }, request_params: { required: true, type: () => Object }, response_code: { required: true, type: () => Number }, timestamp: { required: true, type: () => Date } } }], [import("./model/audit.model"), { "AuditTrail": { id: { required: true, type: () => Number }, user: { required: true, type: () => t["./model/user.model"].User }, table_name: { required: true, type: () => String }, operation: { required: true, type: () => String }, old_data: { required: true, type: () => Object }, new_data: { required: true, type: () => Object }, timestamp: { required: true, type: () => Date } } }], [import("./model/metric.model"), { "Metric": { id: { required: true, type: () => Number }, data: { required: true, type: () => Object }, period: { required: true, type: () => String }, timestamp: { required: true, type: () => Date } } }]], "controllers": [[import("./controller/auth.controller"), { "AuthController": { "register": { type: t["./dto/auth.dto"].AuthResponse }, "login": { type: t["./dto/auth.dto"].AuthResponse }, "me": { type: t["./model/user.model"].User } } }], [import("./controller/bookmark.controller"), { "BookmarkController": { "getAll": { type: [t["./model/bookmark.model"].Bookmark] }, "create": {}, "findAllByUserId": { type: [t["./model/bookmark.model"].Bookmark] }, "startupRemove": {}, "investorRemove": {}, "findAllByStartupId": { type: [t["./model/bookmark.model"].Bookmark] }, "findAllByInvestorId": { type: [t["./model/bookmark.model"].Bookmark] }, "findOneByUserIdAndStartupId": { type: t["./model/bookmark.model"].Bookmark }, "findOneByUserIdAndInvestorId": { type: t["./model/bookmark.model"].Bookmark } } }], [import("./controller/investor.controller"), { "InvestorController": { "getAll": { type: [t["./model/investor.model"].Investor] }, "getOneById": { type: t["./model/investor.model"].Investor }, "create": { type: t["./model/investor.model"].Investor }, "update": { type: t["./model/investor.model"].Investor }, "delete": {} } }], [import("./controller/like.controller"), { "LikeController": { "getAll": { type: [t["./model/like.model"].Like] }, "create": {}, "startupRemove": {}, "investorRemove": {}, "findAllByStartupId": { type: [t["./model/like.model"].Like] }, "findAllByInvestorId": { type: [t["./model/like.model"].Like] }, "findOneByUserIdAndStartupId": { type: t["./model/like.model"].Like }, "findOneByUserIdAndInvestorId": { type: t["./model/like.model"].Like } } }], [import("./controller/report.controller"), { "ReportController": { "getAll": { type: [t["./model/report.model"].Report] }, "getOneById": { type: t["./model/report.model"].Report }, "create": { type: t["./model/report.model"].Report }, "update": { type: t["./model/report.model"].Report }, "delete": {}, "getAllByUserId": { type: [t["./model/report.model"].Report] } } }], [import("./controller/startup.controller"), { "StartupController": { "getAll": { type: [t["./model/startup.model"].Startup] }, "getOneById": { type: t["./model/startup.model"].Startup }, "create": { type: t["./model/startup.model"].Startup }, "update": { type: t["./model/startup.model"].Startup }, "delete": {} } }], [import("./controller/user.controller"), { "UserController": { "getAll": { type: [t["./model/user.model"].User] } } }], [import("./controller/view.controller"), { "ViewController": { "create": {}, "findRecentsByUserId": { type: [t["./model/view.model"].View] }, "findAllByStartupId": { type: [t["./model/view.model"].View] }, "findAllByInvestorId": { type: [t["./model/view.model"].View] }, "getAll": { type: [t["./model/view.model"].View] } } }]] } };
};