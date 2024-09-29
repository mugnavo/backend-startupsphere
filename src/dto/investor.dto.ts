export class InvestorRequest {
	name: string;
	description: string;
	type: string;
	investment_focus: string;
	total_funds: number;
	locationLat: number;
	locationLng: number;
	locationName: string;
	websiteUrl: string;
	logoUrl: string;
	contactInfo: string;
	managerId?: number;

	//createViewRequest, createLikeRequest, createBookmarkRequest
}
