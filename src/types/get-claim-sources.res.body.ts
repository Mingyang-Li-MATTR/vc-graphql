import { z } from 'zod';

export const getClaimSourcesResBodySchema = z.object({
  data: z
    .object({
      id: z.string(),
      url: z.string(),
      name: z.string(),
      authorization: z.object({
        type: z.string(),
        value: z.string(),
      }),
      requestParameters: z.any(),
    })
    .array(),
});

export type GetClaimSourcesResBody = z.infer<
  typeof getClaimSourcesResBodySchema
>;
