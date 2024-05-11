export class RegisterRequest {
	email: string;
	password: string;
	firstName: string;
	lastName: string;
	location: string;
}

export class LoginRequest {
	email: string;
	password: string;
}
