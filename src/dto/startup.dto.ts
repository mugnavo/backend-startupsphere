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
}

export class CreateViewRequest {
	startupId: number;
	userId: number | null;
}

export class CreateLikeRequest {
	startupId: number;
	userId: number;
}

export class CreateBookmarkRequest {
	startupId: number;
	userId: number;
}
