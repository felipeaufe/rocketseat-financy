import { ExpressContextFunctionArgument } from "@as-integrations/express5";
import { JwtPayload, verifyJwt } from "../../utils/jwt";

export type GraphQLContext = {
  user: string | undefined;
  token: string | undefined;
  req: ExpressContextFunctionArgument["req"];
  res: ExpressContextFunctionArgument["res"];
};

const getBearerToken = (authorizationHeader?: string): string | undefined => {
  if (!authorizationHeader?.startsWith("Bearer ")) {
    return undefined;
  }

  return authorizationHeader.slice(7);
};

export const buildContext = async ({
  req,
  res,
}: ExpressContextFunctionArgument): Promise<GraphQLContext> => {
  let user: string | undefined;
  const token = getBearerToken(req.headers.authorization);

  if (token) {
    try {
      const payload: JwtPayload = verifyJwt(token);
      user = payload.id;
    } catch {
      user = undefined;
    }
  }

  return { user, token, req, res };
};
