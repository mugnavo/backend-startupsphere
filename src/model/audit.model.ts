import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.model";

@Entity()
export class AuditTrail {
	@PrimaryGeneratedColumn()
	id: number;

	@ManyToOne(() => User)
	@JoinColumn({ name: "user_id" })
	user: User;

	@Column()
	table_name: string;

	@Column()
	operation: string;

	@Column({ type: "jsonb", array: false, nullable: true })
	old_data: any;

	@Column({ type: "jsonb", array: false, nullable: true })
	new_data: any;

	@Column({ type: "timestamp", default: () => "now()" })
	timestamp: Date;
}
