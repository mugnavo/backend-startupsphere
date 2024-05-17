import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Startup } from "./startup.model";

@Entity()
export class View {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ name: "user_id", nullable: true, default: null })
	user_id: number;

	@ManyToOne(() => Startup)
	@JoinColumn({ name: "startup_id" })
	startup: Startup;

	@Column({ type: "timestamp" })
	timestamp: Date;
}
