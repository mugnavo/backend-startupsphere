import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.model";

@Entity()
export class Report {
	@PrimaryGeneratedColumn()
	id: number;

	@ManyToOne(() => User, { onDelete: "SET NULL" })
	@JoinColumn({ name: "user_id" })
	generated_by: User;

	@Column()
	name: string;

	@Column()
	file_type: string;

	@Column()
	url: string;

	@Column({ type: "timestamp", default: () => "now()" })
	timestamp: Date;
}
