import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Startup {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	name: string;

	@Column()
	description: string;

	@Column()
	locationLat: number;

	@Column()
	locationLng: number;

	@Column()
	locationName: string;

	@Column()
	founderName: string;

	@Column()
	websiteUrl: string;

	@Column()
	logoUrl: string;

	@Column()
	categories: string;

	@Column()
	foundedDate: Date;

	@Column()
	contactInfo: string;

	@Column()
	likes: number;

	@Column()
	bookmarks: number;

	@Column()
	views: number;
}
