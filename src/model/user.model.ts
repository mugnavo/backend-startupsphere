import { ApiHideProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	email: string;

	@ApiHideProperty()
	@Column()
	hashedPassword: string;

	@Column()
	avatarUrl: string;

	@Column()
	firstName: string;

	@Column()
	lastName: string;

	@Column()
	location: string;

	@Column()
	moderator: boolean;

	@Column()
	createdAt: Date;

	constructor(
		id: number | undefined,
		email: string,
		hashedPassword: string | undefined,
		avatarUrl: string,
		firstName: string,
		lastName: string,
		location: string,
		moderator: boolean,
		createdAt: Date | undefined
	) {
		this.id = id;
		this.email = email;
		this.hashedPassword = hashedPassword;
		this.avatarUrl = avatarUrl;
		this.firstName = firstName;
		this.lastName = lastName;
		this.location = location;
		this.moderator = moderator;
		this.createdAt = createdAt;
	}

	getId(): number {
		return this.id;
	}

	getEmail(): string {
		return this.email;
	}

	getHashedPassword(): string {
		return this.hashedPassword;
	}

	getAvatarUrl(): string {
		return this.avatarUrl;
	}

	getFirstName(): string {
		return this.firstName;
	}

	getLastName(): string {
		return this.lastName;
	}

	getLocation(): string {
		return this.location;
	}

	isModerator(): boolean {
		return this.moderator;
	}

	getCreatedAt(): Date {
		return this.createdAt;
	}

	setId(id: number): void {
		this.id = id;
	}

	setEmail(email: string): void {
		this.email = email;
	}

	setHashedPassword(hashedPassword: string): void {
		this.hashedPassword = hashedPassword;
	}

	setAvatarUrl(avatarUrl: string): void {
		this.avatarUrl = avatarUrl;
	}

	setFirstName(firstName: string): void {
		this.firstName = firstName;
	}

	setLastName(lastName: string): void {
		this.lastName = lastName;
	}

	setLocation(location: string): void {
		this.location = location;
	}

	setModerator(moderator: boolean): void {
		this.moderator = moderator;
	}

	setCreatedAt(createdAt: Date): void {
		this.createdAt = createdAt;
	}
}
