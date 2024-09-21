import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Startup } from "./startup.model";
import { Investor } from "./investor.model";
import { User } from "./user.model";

@Entity()
export class EntityManage {
	@PrimaryGeneratedColumn()
	id: number;

	@ManyToOne(() => User)
	@JoinColumn({ name: "user_id" })
	user: User;

	@ManyToOne(() => Startup, { onDelete: "CASCADE", nullable: true })
	@JoinColumn({ name: "startup_id" })
	startup?: Startup;

	@ManyToOne(() => Investor, { onDelete: "CASCADE", nullable: true })
	@JoinColumn({ name: "investor_id" })
	investor?: Investor;

	@Column({ type: "timestamp", default: () => "now()" })
	timestamp: Date;
}
