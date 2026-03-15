import { createParameterDecorator, ResolverData } from "type-graphql";
import { User } from "@prisma/client";
import { GraphQLContext } from "../context";
import { prismaClient } from "../../../prisma/prisma";

export const GqlUser = () => {
  return createParameterDecorator(
    async ({ context }: ResolverData<GraphQLContext>): Promise<User> => {
      if (!context?.user) {
        throw new Error("Not authenticated");
      }

      const user = await prismaClient.user.findUnique({
        where: { id: context.user },
      });

      if (!user) {
        throw new Error("User not found");
      }

      return user;
    },
  );
};
