import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.model";

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

	@ManyToOne(() => User, { onDelete: "SET NULL", nullable: true })
	@JoinColumn({ name: "manager_id" })
	managerId?: number;

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

	@Column({ default: 0 })
	likes: number;

	@Column({ default: 0 })
	bookmarks: number;

	@Column({ default: 0 })
	views: number;

	// TODO should we add likes, bookmarks, views?
}
