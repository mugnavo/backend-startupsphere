import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Investor } from "./investor.model";
import { Startup } from "./startup.model";

@Entity()
export class View {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ name: "user_id", nullable: true, default: null, type: "int8" })
	user_id: number | null;

	@ManyToOne(() => Startup, { onDelete: "CASCADE", nullable: true })
	@JoinColumn({ name: "startup_id" })
	startup?: Startup;

	@ManyToOne(() => Investor, { onDelete: "CASCADE", nullable: true })
	@JoinColumn({ name: "startup_id" })
	investor?: Investor;

	@Column({ type: "timestamp", default: () => "now()" })
	timestamp: Date;
}
