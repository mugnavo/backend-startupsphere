import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Investor {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	name: string;

	@Column()
	description: string;

	@Column()
	type: string; // VC, Angel, corporate, etc.

	@Column()
	investment_focus: string;

	@Column()
	total_funds: number;

	@Column({ name: "location_lat", type: "decimal", precision: 20, scale: 16 })
	locationLat: number;

	@Column({ name: "location_lng", type: "decimal", precision: 20, scale: 16 })
	locationLng: number;

	@Column({ name: "location_name" })
	locationName: string;

	@Column({ name: "website_url" })
	websiteUrl: string;

	@Column({ name: "logo_url" })
	logoUrl: string;

	@Column({ name: "contact_info" })
	contactInfo: string;

	// TODO should we add likes, bookmarks, views?
}
