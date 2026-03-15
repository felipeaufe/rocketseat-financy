import { prismaClient } from "../../prisma/prisma";
import { CreateUserInput, EditUserInput } from "../dtos/input/user.input";
import { hashPassword } from "../utils/hash";

export class UserService {
  private async findUserOrThrow(id: string) {
    const user = await prismaClient.user.findUnique({
      where: { id },
    });

    if (!user) {
      throw new Error("User not found");
    }

    return user;
  }

  private async ensureEmailIsAvailable(email: string, userIdToIgnore?: string) {
    const user = await prismaClient.user.findUnique({
      where: { email },
    });

    if (user && user.id !== userIdToIgnore) {
      throw new Error("Email already in use");
    }
  }

  async findUser(id: string) {
    return this.findUserOrThrow(id);
  }

  async createUser(data: CreateUserInput) {
    await this.ensureEmailIsAvailable(data.email);

    const user = await prismaClient.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: await hashPassword(data.password),
      },
    });

    return user;
  }

  async editUser(data: EditUserInput) {
    await this.findUserOrThrow(data.id);

    if (data.email) {
      await this.ensureEmailIsAvailable(data.email, data.id);
    }

    return prismaClient.user.update({
      where: { id: data.id },
      data: {
        ...(data.name === undefined ? {} : { name: data.name }),
        ...(data.email === undefined ? {} : { email: data.email }),
        ...(data.password === undefined
          ? {}
          : { password: await hashPassword(data.password) }),
      },
    });
  }
}
