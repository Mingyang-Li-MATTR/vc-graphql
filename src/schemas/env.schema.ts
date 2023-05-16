import { z } from 'zod';

export const envSchema = z.object({
  MATTR_BASE_URL: z.string(),
  MATTR_AUTH_TOKEN: z.string(),
});

export type AppConfig = z.infer<typeof envSchema>;

export const validate = (data: Record<string, any>): AppConfig => {
  const result = envSchema.safeParse(data);
  if (result.success === true) {
    return result.data;
  } else {
    throw new Error(result.error.toString());
  }
};
