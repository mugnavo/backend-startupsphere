import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	email: string;

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
}
