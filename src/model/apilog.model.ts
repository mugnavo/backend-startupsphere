import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ApiLog {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	endpoint: string;

	@Column()
	request_method: string;

	@Column({ type: "jsonb", array: false, nullable: true })
	request_params: any;

	@Column()
	response_code: number;

	@Column({ type: "timestamp", default: () => "now()" })
	timestamp: Date;
}
