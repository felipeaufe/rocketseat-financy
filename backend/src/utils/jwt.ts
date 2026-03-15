import jwt, { Secret, SignOptions } from "jsonwebtoken";

export type JwtPayload = {
  id: string;
  email: string;
};

const getJwtSecret = (): Secret => {
  const secret = process.env.JWT_SECRET;

  if (!secret) {
    throw new Error("JWT_SECRET is not configured");
  }

  return secret;
};

export const signJwt = (
  payload: JwtPayload,
  expiresIn?: NonNullable<SignOptions["expiresIn"]>,
): string => {
  const options: SignOptions | undefined = expiresIn
    ? { expiresIn }
    : undefined;

  return jwt.sign(payload, getJwtSecret(), options);
};

export const verifyJwt = (token: string): JwtPayload => {
  return jwt.verify(token, getJwtSecret()) as JwtPayload;
};
