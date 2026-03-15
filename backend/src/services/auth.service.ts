import { User } from "@prisma/client";
import { prismaClient } from "../../prisma/prisma";
import { LoginInput, RegisterInput } from "../dtos/input/auth.input";
import { comparePassword, hashPassword } from "../utils/hash";
import { signJwt } from "../utils/jwt";

export class AuthService {
  private readonly invalidCredentialsMessage = "Dados incorretos";

  async login(data: LoginInput) {
    const user = await prismaClient.user.findUnique({
      where: {
        email: data.email,
      },
    });

    await this.validateCredentials(user, data.password);

    return this.generateTokens(user);
  }

  async register(data: RegisterInput) {
    const existingUser = await prismaClient.user.findUnique({
      where: {
        email: data.email,
      },
    });

    if (existingUser) {
      throw new Error("User already exists");
    }

    const user = await prismaClient.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: await hashPassword(data.password),
      },
    });

    return this.generateTokens(user);
  }

  private async validateCredentials(user: User | null, password: string) {
    if (!user) {
      throw new Error(this.invalidCredentialsMessage);
    }

    const isPasswordValid = await comparePassword(password, user.password);

    if (!isPasswordValid) {
      throw new Error(this.invalidCredentialsMessage);
    }
  }

  private sanitizeUser(user: User) {
    const { password: _, ...safeUser } = user;

    return safeUser;
  }

  private generateTokens(user: User) {
    const token = signJwt({ id: user.id, email: user.email }, "30m");
    const refreshToken = signJwt({ id: user.id, email: user.email }, "7d");

    return {
      token,
      refreshToken,
      user: this.sanitizeUser(user),
    };
  }
}
