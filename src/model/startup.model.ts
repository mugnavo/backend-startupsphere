import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Startup {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	name: string;

	@Column()
	description: string;

	@Column({ name: "location_lat", type: "decimal", precision: 20, scale: 16 })
	locationLat: number;

	@Column({ name: "location_lng", type: "decimal", precision: 20, scale: 16 })
	locationLng: number;

	@Column({ name: "location_name" })
	locationName: string;

	@Column({ name: "founder_name" })
	founderName: string;

	@Column({ name: "website_url" })
	websiteUrl: string;

	@Column({ name: "logo_url" })
	logoUrl: string;

	@Column({ type: "text", array: true })
	categories: string[];

	@Column({ name: "founded_date" })
	foundedDate: Date;

	@Column({ name: "contact_info" })
	contactInfo: string;

	@Column({ default: 0 })
	likes: number;

	@Column({ default: 0 })
	bookmarks: number;

	@Column({ default: 0 })
	views: number;

	constructor(
		id: number,
		name: string,
		description: string,
		locationLat: number,
		locationLng: number,
		locationName: string,
		founderName: string,
		websiteUrl: string,
		logoUrl: string,
		categories: string[],
		foundedDate: Date,
		contactInfo: string,
		likes: number,
		bookmarks: number,
		views: number
	) {
		this.id = id;
		this.name = name;
		this.description = description;
		this.locationLat = locationLat;
		this.locationLng = locationLng;
		this.locationName = locationName;
		this.founderName = founderName;
		this.websiteUrl = websiteUrl;
		this.logoUrl = logoUrl;
		this.categories = categories;
		this.foundedDate = foundedDate;
		this.contactInfo = contactInfo;
		this.likes = likes;
		this.bookmarks = bookmarks;
		this.views = views;
	}

	getId(): number {
		return this.id;
	}

	setId(value: number) {
		this.id = value;
	}

	getName(): string {
		return this.name;
	}

	set(value: string) {
		this.name = value;
	}

	getDescription(): string {
		return this.description;
	}

	setDescription(value: string) {
		this.description = value;
	}

	getLocationLat(): number {
		return this.locationLat;
	}

	setLocationLat(value: number) {
		this.locationLat = value;
	}

	getLocationLng(): number {
		return this.locationLng;
	}

	setLocationLng(value: number) {
		this.locationLng = value;
	}

	getLocationName(): string {
		return this.locationName;
	}

	setLocationName(value: string) {
		this.locationName = value;
	}

	getFounderName(): string {
		return this.founderName;
	}

	setFounderName(value: string) {
		this.founderName = value;
	}

	getWebsiteUrl(): string {
		return this.websiteUrl;
	}

	setWebsiteUrl(value: string) {
		this.websiteUrl = value;
	}

	getLogoUrl(): string {
		return this.logoUrl;
	}

	setLogoUrl(value: string) {
		this.logoUrl = value;
	}

	getCategories(): string[] {
		return this.categories;
	}

	setCategories(value: string[]) {
		this.categories = value;
	}

	getFoundedDate(): Date {
		return this.foundedDate;
	}

	setFoundedDate(value: Date) {
		this.foundedDate = value;
	}

	getContactInfo(): string {
		return this.contactInfo;
	}

	setContactInfo(value: string) {
		this.contactInfo = value;
	}

	getLikes(): number {
		return this.likes;
	}

	setLikes(value: number) {
		this.likes = value;
	}

	getBookmarks(): number {
		return this.bookmarks;
	}

	setBookmarks(value: number) {
		this.bookmarks = value;
	}

	getViews(): number {
		return this.views;
	}

	setViews(value: number) {
		this.views = value;
	}
}
