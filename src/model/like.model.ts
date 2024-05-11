import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Startup } from "./startup.model";
import { User } from "./user.model";

@Entity()
export class Like {
	@PrimaryGeneratedColumn()
	id: number;

	@ManyToOne(() => User)
	@JoinColumn({ name: "user_id" })
	user: User;

	@ManyToOne(() => Startup)
	@JoinColumn({ name: "startup_id" })
	startup: Startup;

	@Column({ type: "timestamp" })
	timestamp: Date;
}
