import { IJobQuery } from "./interfaces";

export {};

declare global {
  namespace Express {
    interface Request {
      jobQuery: IJobQuery;
      user: {
        userId: string;
        name: string;
      };
    }
  }
  namespace NodeJS {
    interface ProcessEnv {
      [key: string]: string | undefined;
      PORT: string;
      DATABASE_URL: string;
      JWT_SECRET: string;
      JWT_LIFETIME: string;
    }
  }
}
