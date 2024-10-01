export class StartupRequest {
	name: string;
	description: string;
	locationLat: number;
	locationLng: number;
	locationName: string;
	founderName: string;
	websiteUrl: string;
	logoUrl: string;
	categories: string[];
	foundedDate: Date;
	contactInfo: string;
	managerId?: number;
	capital: number;
	fundingStage: string;
	teamSize: number;
}

export class CreateViewRequest {
	startupId?: number;
	investorId?: number;
	userId: number | null;
}

export class CreateLikeRequest {
	startupId?: number;
	investorId?: number;
	userId: number;
}

export class CreateBookmarkRequest {
	startupId?: number;
	investorId?: number;
	userId: number;
}
