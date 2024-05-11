import { SetMetadata } from "@nestjs/common";

export const IS_PUBLIC_KEY = "isPublic";
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);

export const jwtConstants = {
	secret: process.env.JWT_SECRET || "AD!DA-_G4KDS-JHIU82H1Ks#@",
};
