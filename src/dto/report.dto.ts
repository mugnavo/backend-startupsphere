import { User } from "src/model/user.model";

export class ReportRequest {
	// id: number;
	generatedBy: User;
	name: string;
	fileType: string;
	url: string;
	// timestamp: Date;
}
