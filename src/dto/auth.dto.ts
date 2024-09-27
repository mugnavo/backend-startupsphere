export class RegisterRequest {
	email: string;
	password: string;
	firstName: string;
	lastName: string;
	role: string;
}

export class LoginRequest {
	email: string;
	password: string;
}

export class AuthResponse {
	access_token?: string;
	error?: string;
}
