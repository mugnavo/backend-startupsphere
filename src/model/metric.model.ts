import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Metric {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ type: "jsonb", array: false, nullable: false })
	data: any;

	@Column()
	period: string; // "y", "m", "w", or "d" (e.g. "y" means this metric is for the past year)

	@Column({ type: "timestamp", default: () => "now()" })
	timestamp: Date;
}
